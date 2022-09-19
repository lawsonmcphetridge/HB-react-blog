import React from 'react';
import { useBlogs } from '../../hooks/useBlogs';
import BlogCard from '../BlogCard/BlogCard';
export default function Main() {
  const blogs = useBlogs();
  return (
    <section>   
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}  
    </section>
  );
}

//netlify fix