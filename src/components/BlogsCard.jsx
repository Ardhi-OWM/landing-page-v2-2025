import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal routing
import Button from './Button';

const BlogsCard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(4); // Initial number of posts displayed
  const [blogContent, setBlogContent] = useState([]); // State to hold blog posts
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch blog posts from WordPress.com
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://public-api.wordpress.com/wp/v2/sites/ardhi23.wordpress.com/posts');
        const data = await response.json();
        // Format data to match your existing structure
        const formattedData = data.map(post => ({
          id: post.id,
          title: post.title.rendered.replace(/&nbsp;/g, " "), // Replace &nbsp; with regular space
          description: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""), // Strip HTML tags
          content: post.content.rendered, // Fetch full content of the post
          url: post.link
        }));
        setBlogContent(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Helper function to truncate text to 150 characters
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  // Filtered blog content based on search query
  const filteredContent = blogContent.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine which content to display based on whether a search has been made
  const contentToDisplay = searchQuery ? filteredContent : blogContent.slice(0, displayCount);

  // Function to increase the number of displayed blog posts
  const loadMoreBlogs = () => {
    const newDisplayCount = displayCount + 4;  // Increase displayed blogs by 4 each time
    if (newDisplayCount < blogContent.length) {
      setDisplayCount(newDisplayCount);
    } else {
      setDisplayCount(blogContent.length);  // Do not exceed total number of blogs
    }
  };

  // Function to reset the number of displayed blog posts to the initial count of 4
  const loadLessBlogs = () => {
    setDisplayCount(4);  // Reset display count to the initial value
  };

  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  return (
    <>
      <div className="flex justify-center p-3">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-64 px-4 py-2 border rounded shadow tagline"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-between gap-[1rem] mx-auto p-4" style={{ maxWidth: '960px' }} href="/blogs">
        {contentToDisplay.map((item) => (
          <div id={item.id} key={item.id}
            className='w-full md:w-[calc(50%-0.5rem)] lg:w-[28rem] bg-n-8 border-b border-l border-n-6 rounded-[1rem] px-4 py-4 mb-4 hover:bg-n-7 hover:shadow-lg transition duration-300 ease-in-out'>
            <h6 className='text-lg font-semibold mb-3 text-n-4'>{item.title}</h6>
            <p className='text-sm text-n-3 mb-3'>{truncateText(item.description, 150)}</p>
            <div className='mt-6 flex items-center justify-auto'>
              {/* Internal link to blog detail page */}
              <Link
                // to={`/blog/${item.id}`}
                to={`/blog/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevents the default navigation
                  window.open(
                    //`/blog/${item.id}`,
                    `/blog/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`,
                    '_blank', 'noopener,noreferrer'); // Opens in a new tab
                }}
                className='tagline text-n-10 hover:text-n-5 underline uppercase px-3 py-1'>
                Read more ...
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {contentToDisplay.length < blogContent.length && !searchQuery && (
          <Button white onClick={loadMoreBlogs}

            className="relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1">
            More Blogs
          </Button>
        )}
        {displayCount > 4 && !searchQuery && (
          <Button onClick={loadLessBlogs}
            className="relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1">
            Less Blogs
          </Button>
        )}
      </div>
    </>
  )
}

export default BlogsCard;
