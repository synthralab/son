import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { blogData as defaultBlogData } from "../data/blogData";
import { portfolioData as defaultPortfolioData } from "../data/portfolioData";
import { servicesData as defaultServicesData } from "../data/servicesData";
import { faqData as defaultFaqData } from "../data/faqData";
import { jobPositions as defaultCareerData } from "../data/careerData";
import { pricingPlans, digitalMarketingPlans, socialMediaPlans } from "../data/pricingData";

interface CMSContextType {
  // Data
  blogData: any[];
  portfolioData: any[];
  servicesData: any[];
  faqData: any[];
  careerData: any[];
  pricingData: any[];
  
  // CRUD Operations
  addBlog: (blog: any) => void;
  updateBlog: (id: string, blog: any) => void;
  deleteBlog: (id: string) => void;
  
  addPortfolio: (portfolio: any) => void;
  updatePortfolio: (id: string, portfolio: any) => void;
  deletePortfolio: (id: string) => void;
  
  addService: (service: any) => void;
  updateService: (id: string, service: any) => void;
  deleteService: (id: string) => void;
  
  addFaq: (faq: any) => void;
  updateFaq: (id: string, faq: any) => void;
  deleteFaq: (id: string) => void;
  
  addCareer: (career: any) => void;
  updateCareer: (id: string, career: any) => void;
  deleteCareer: (id: string) => void;
  
  updatePricing: (category: string, data: any) => void;
  
  // Utility
  exportData: () => void;
  importData: (jsonData: string) => void;
  resetData: () => void;
  
  // Auth
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const STORAGE_KEY = "synthralab_cms_data";
const AUTH_KEY = "synthralab_cms_auth";
const ADMIN_PASSWORD = "admin123"; // Change this!

export function CMSProvider({ children }: { children: ReactNode }) {
  const [blogData, setBlogData] = useState(defaultBlogData);
  const [portfolioData, setPortfolioData] = useState(defaultPortfolioData);
  const [servicesData, setServicesData] = useState(defaultServicesData);
  const [faqData, setFaqData] = useState(defaultFaqData);
  const [careerData, setCareerData] = useState(defaultCareerData);
  const [pricingData, setPricingData] = useState({
    branding: pricingPlans,
    digital: digitalMarketingPlans,
    social: socialMediaPlans,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setBlogData(data.blogData || defaultBlogData);
        setPortfolioData(data.portfolioData || defaultPortfolioData);
        setServicesData(data.servicesData || defaultServicesData);
        setFaqData(data.faqData || defaultFaqData);
        setCareerData(data.careerData || defaultCareerData);
        setPricingData(data.pricingData || {
          branding: pricingPlans,
          digital: digitalMarketingPlans,
          social: socialMediaPlans,
        });
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }

    // Check authentication
    const auth = localStorage.getItem(AUTH_KEY);
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    const data = {
      blogData,
      portfolioData,
      servicesData,
      faqData,
      careerData,
      pricingData,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [blogData, portfolioData, servicesData, faqData, careerData, pricingData]);

  // Auth functions
  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_KEY, "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
  };

  // Blog CRUD
  const addBlog = (blog: any) => {
    setBlogData([...blogData, { ...blog, id: Date.now().toString() }]);
  };

  const updateBlog = (id: string, blog: any) => {
    setBlogData(blogData.map((b) => (b.id === id ? { ...b, ...blog } : b)));
  };

  const deleteBlog = (id: string) => {
    setBlogData(blogData.filter((b) => b.id !== id));
  };

  // Portfolio CRUD
  const addPortfolio = (portfolio: any) => {
    setPortfolioData([...portfolioData, { ...portfolio, id: Date.now().toString() }]);
  };

  const updatePortfolio = (id: string, portfolio: any) => {
    setPortfolioData(portfolioData.map((p) => (p.id === id ? { ...p, ...portfolio } : p)));
  };

  const deletePortfolio = (id: string) => {
    setPortfolioData(portfolioData.filter((p) => p.id !== id));
  };

  // Services CRUD
  const addService = (service: any) => {
    setServicesData([...servicesData, { ...service, id: Date.now().toString() }]);
  };

  const updateService = (id: string, service: any) => {
    setServicesData(servicesData.map((s) => (s.id === id ? { ...s, ...service } : s)));
  };

  const deleteService = (id: string) => {
    setServicesData(servicesData.filter((s) => s.id !== id));
  };

  // FAQ CRUD
  const addFaq = (faq: any) => {
    setFaqData([...faqData, { ...faq, id: Date.now().toString() }]);
  };

  const updateFaq = (id: string, faq: any) => {
    setFaqData(faqData.map((f) => (f.id === id ? { ...f, ...faq } : f)));
  };

  const deleteFaq = (id: string) => {
    setFaqData(faqData.filter((f) => f.id !== id));
  };

  // Career CRUD
  const addCareer = (career: any) => {
    setCareerData([...careerData, { ...career, id: Date.now().toString() }]);
  };

  const updateCareer = (id: string, career: any) => {
    setCareerData(careerData.map((c) => (c.id === id ? { ...c, ...career } : c)));
  };

  const deleteCareer = (id: string) => {
    setCareerData(careerData.filter((c) => c.id !== id));
  };

  // Pricing Update
  const updatePricing = (category: string, data: any) => {
    setPricingData((prev: any) => ({
      ...prev,
      [category]: data,
    }));
  };

  // Utility functions
  const exportData = () => {
    const data = {
      blogData,
      portfolioData,
      servicesData,
      faqData,
      careerData,
      pricingData,
      exportDate: new Date().toISOString(),
    };
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `synthralab-backup-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importData = (jsonData: string) => {
    try {
      const data = JSON.parse(jsonData);
      if (data.blogData) setBlogData(data.blogData);
      if (data.portfolioData) setPortfolioData(data.portfolioData);
      if (data.servicesData) setServicesData(data.servicesData);
      if (data.faqData) setFaqData(data.faqData);
      if (data.careerData) setCareerData(data.careerData);
      if (data.pricingData) setPricingData(data.pricingData);
      return true;
    } catch (error) {
      console.error("Error importing data:", error);
      return false;
    }
  };

  const resetData = () => {
    setBlogData(defaultBlogData);
    setPortfolioData(defaultPortfolioData);
    setServicesData(defaultServicesData);
    setFaqData(defaultFaqData);
    setCareerData(defaultCareerData);
    setPricingData(defaultPricingData);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <CMSContext.Provider
      value={{
        blogData,
        portfolioData,
        servicesData,
        faqData,
        careerData,
        pricingData,
        addBlog,
        updateBlog,
        deleteBlog,
        addPortfolio,
        updatePortfolio,
        deletePortfolio,
        addService,
        updateService,
        deleteService,
        addFaq,
        updateFaq,
        deleteFaq,
        addCareer,
        updateCareer,
        deleteCareer,
        updatePricing,
        exportData,
        importData,
        resetData,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error("useCMS must be used within CMSProvider");
  }
  return context;
}
