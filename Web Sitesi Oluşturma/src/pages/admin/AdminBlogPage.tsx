import { useState } from "react";
import { useCMS } from "../../contexts/CMSContext";
import AdminLayout from "../../components/admin/AdminLayout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Card } from "../../components/ui/card";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";

export default function AdminBlogPage() {
  const { blogData, addBlog, updateBlog, deleteBlog } = useCMS();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    category: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
    readTime: "",
    tags: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const blogPost = {
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()),
    };

    if (editingBlog) {
      updateBlog(editingBlog.id, blogPost);
      toast.success("Blog güncellendi!");
    } else {
      addBlog(blogPost);
      toast.success("Blog eklendi!");
    }

    handleCloseDialog();
  };

  const handleEdit = (blog: any) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      category: blog.category,
      author: blog.author,
      date: blog.date,
      readTime: blog.readTime,
      tags: blog.tags.join(", "),
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Bu blog yazısını silmek istediğinize emin misiniz?")) {
      deleteBlog(id);
      toast.success("Blog silindi!");
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingBlog(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      image: "",
      category: "",
      author: "",
      date: new Date().toISOString().split("T")[0],
      readTime: "",
      tags: "",
    });
  };

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Blog Yönetimi</h1>
          <p className="text-white/60">Blog yazılarını ekleyin, düzenleyin veya silin</p>
        </div>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-500/50"
        >
          <Plus className="mr-2" size={20} />
          Yeni Blog Ekle
        </Button>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              {/* Image */}
              {blog.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs">
                    {blog.category}
                  </span>
                  <span className="text-white/40 text-xs">{blog.date}</span>
                </div>
                <h3 className="text-white font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-white/60 text-sm line-clamp-2 mb-4">
                  {blog.excerpt}
                </p>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEdit(blog)}
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    <Edit size={16} className="mr-2" />
                    Düzenle
                  </Button>
                  <Button
                    onClick={() => handleDelete(blog.id)}
                    variant="outline"
                    size="sm"
                    className="bg-white/5 border-white/10 text-red-400 hover:bg-red-500/20 hover:border-red-500/50"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>{editingBlog ? "Blog Düzenle" : "Yeni Blog Ekle"}</DialogTitle>
            <DialogDescription className="text-white/60">
              Blog yazısı bilgilerini doldurun
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Başlık</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
                required
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Özet</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor="content">İçerik</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
                rows={6}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="image">Resim URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="https://..."
                />
              </div>
              <div>
                <Label htmlFor="category">Kategori</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="bg-white/5 border-white/10 text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="author">Yazar</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="bg-white/5 border-white/10 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="date">Tarih</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-white/5 border-white/10 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="readTime">Okuma Süresi</Label>
                <Input
                  id="readTime"
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="5 dakika"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="tags">Etiketler (virgülle ayırın)</Label>
              <Input
                id="tags"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
                placeholder="dijital, pazarlama, SEO"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
              >
                {editingBlog ? "Güncelle" : "Ekle"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCloseDialog}
                className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                İptal
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
