import React, { useState } from 'react';
import { Search, Calendar, Clock, Tag, ArrowRight, Facebook, Twitter, Linkedin } from 'lucide-react';

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "anxiety", name: "Anxiety & Depression" },
    { id: "relationships", name: "Relationships" },
    { id: "mindfulness", name: "Mindfulness" },
    { id: "personal-growth", name: "Personal Growth" }
  ];

  const posts = [
    {
      id: 1,
      title: "Understanding Anxiety in the Modern World",
      date: "March 15, 2024",
      author: {
        name: "Dr. Sarah Johnson",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=100&h=100",
        role: "Clinical Psychologist"
      },
      category: "anxiety",
      image: "https://images.unsplash.com/photo-1474418397713-2f1091382ad6?auto=format&fit=crop&q=80",
      excerpt: "Learn about the common triggers of anxiety and effective coping strategies for modern life. Discover practical techniques to manage stress and build resilience in today's fast-paced world.",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Power of Mindfulness in Daily Life",
      date: "March 10, 2024",
      author: {
        name: "Dr. Sarah Johnson",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=100&h=100",
        role: "Clinical Psychologist"
      },
      category: "mindfulness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
      excerpt: "Discover how incorporating mindfulness practices can transform your daily experiences and improve your mental well-being through simple, practical exercises.",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Building Healthy Relationships",
      date: "March 5, 2024",
      author: {
        name: "Dr. Sarah Johnson",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=100&h=100",
        role: "Clinical Psychologist"
      },
      category: "relationships",
      image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80",
      excerpt: "Explore key principles for developing and maintaining meaningful relationships. Learn communication skills and strategies for building trust and intimacy.",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Self-Care Strategies for Better Mental Health",
      date: "March 1, 2024",
      author: {
        name: "Dr. Sarah Johnson",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=100&h=100",
        role: "Clinical Psychologist"
      },
      category: "personal-growth",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80",
      excerpt: "Discover practical self-care strategies that can help improve your mental health and overall well-being. Learn how to create a sustainable self-care routine.",
      readTime: "5 min read"
    }
  ];

  const archives = [
    { month: "March 2024", count: 4 },
    { month: "February 2024", count: 6 },
    { month: "January 2024", count: 5 },
    { month: "December 2023", count: 4 }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                        <p className="text-sm text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                      <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-blue-600">
                          <Facebook className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 hover:text-blue-400">
                          <Twitter className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 hover:text-blue-700">
                          <Linkedin className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-teal-600 text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h2>
              <div className="space-y-4">
                {posts.slice(0, 3).map(post => (
                  <a
                    key={post.id}
                    href="#"
                    className="flex items-start space-x-4 group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600">{post.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Archives */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Archives</h2>
              <div className="space-y-2">
                {archives.map(archive => (
                  <a
                    key={archive.month}
                    href="#"
                    className="flex items-center justify-between py-2 text-gray-700 hover:text-teal-600 transition-colors"
                  >
                    <span>{archive.month}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                      {archive.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}