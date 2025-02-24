import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetails = () => {
    const { slug } = useParams(); // Get the blog post ID from the URL

    const [post, setPost] = useState(null);
    const [recentPosts, setRecentPosts] = useState([]); // State for recent posts
    const [loading, setLoading] = useState(true);

    // Function to truncate text to a specific word limit and remove unwanted characters
    const truncateText = (text, wordLimit) => {
        // Ensure the input is a string and remove HTML tags, &hellip;, and square brackets []
        const sanitizedText = (text || '') // Fallback to an empty string if text is null or undefined
            .replace(/<[^>]+>/g, '') // Remove HTML tags
            .replace(/&hellip;/g, '')
            .replace(/\[\]/g, '') // Remove empty square brackets []
            .trim(); // Trim leading and trailing spaces

        const words = sanitizedText.split(/\s+/); // Split by one or more spaces

        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + " ...";  // Add ellipsis if text exceeds word limit
        }

        return sanitizedText; // Return full text if not exceeding the word limit
    };


    useEffect(() => {
        const loadWordPressStyles = () => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://s1.wp.com/wp-content/themes/pub/bitacora/style.css'; // Main Bitacora CSS
            document.head.appendChild(link);

            // Load Sora font
            const fontLink = document.createElement('link');
            fontLink.rel = 'stylesheet';
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap';
            document.head.appendChild(fontLink);

            // Load Source Code Pro font
            const sourceCodeFontLink = document.createElement('link');
            sourceCodeFontLink.rel = 'stylesheet';
            sourceCodeFontLink.href = 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap';
            document.head.appendChild(sourceCodeFontLink);

            // Clean up function to remove links if needed when component unmounts
            return () => {
                document.head.removeChild(soraFontLink);
                document.head.removeChild(sourceCodeFontLink);
            };

        };

        loadWordPressStyles();

        const fetchPostBySlug = async () => {
            try {
                const response = await fetch(`https://public-api.wordpress.com/wp/v2/sites/ardhi23.wordpress.com/posts?slug=${slug}`);
                const data = await response.json();


                if (data && data.length > 0) {
                    const post = data[0]; // Assuming the API returns an array of posts, take the first one
                    setPost({
                        title: post.title.rendered.replace(/&nbsp;/g, " "),
                        content: post.content.rendered,
                        date: new Date(post.date).toLocaleDateString(),
                        featured_media: post.featured_media ? post.featured_media.source_url : null
                    });
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching the blog post:', error);
                setLoading(false);
            }
        };


        const fetchRecentPosts = async () => {
            try {
                const response = await fetch(`https://public-api.wordpress.com/wp/v2/sites/ardhi23.wordpress.com/posts`);
                const data = await response.json();
                setRecentPosts(data.slice(0, 4)); // Get the 5 most recent posts
            } catch (error) {
                console.error('Error fetching recent posts:', error);
            }
        };



        fetchPostBySlug();
        fetchRecentPosts();
    }, [slug]);

    if (loading) {
        return <p>Loading post...</p>;
    }

    if (!post) {
        return <p>Post not found.</p>;
    }

    return (
        <>
            {/* Full-width cover image */}
            {post.featured_media && (
                <div className="w-screen relative left-[50%] right-[50%] mx-[-50vw]">
                    <img
                        src={post.featured_media}
                        alt={post.title}
                        className="w-full h-auto" // Full width image
                    />
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
                {/* Main blog post - 2/3 width */}
                <div className="blog-detail p-4 lg:col-span-2">
                    <h1 className="text-2xl font-bold mb-4 text-center uppercase ">{post.title}</h1>
                    <p className="text-sm text-gray-500 mb-4 text-center">Published on {post.date}</p>

                    {/* Render the full blog post content */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Recent posts section - 1/3 width, vertically centered on large screens */}
                <div className="lg:col-span-1 lg:absolute lg:top-[55%] lg:right-0 lg:w-1/3 pr-9">
                    <div className="w-full">
                        {/* Title above the recent posts list */}
                        <h2 className="text-xl font-bold mb-4 text-center uppercase">Recent Posts</h2>
                        <ul>
                            {recentPosts.map((recentPost) => {
                                // Generate a slug from the post title for URL, removing non-breaking spaces (&nbsp;)
                                const postSlug = recentPost.title.rendered
                                    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with a space
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')  // Replace spaces with dashes
                                    .replace(/[^a-z0-9\-]/g, ''); // Remove any special characters

                                return (
                                    <li key={recentPost.id} className="mb-4">
                                        <Link to={`/blog/${postSlug}`}
                                            className="text-blue-500 hover:underline font-source-code">
                                            {recentPost.title.rendered.replace(/&nbsp;/g, " ")}
                                        </Link>
                                        <p className="blog-date">Published on {new Date(recentPost.date).toLocaleDateString()}</p>

                                        <p className="text-sm text-gray-500 mt-2">
                                            {truncateText(recentPost.excerpt.rendered.replace(/<[^>]+>/g, ''), 50)}
                                            <Link
                                                to={`/blog/${postSlug}`}
                                                className="text-xs text-blue-600/50 hover:underline font-bold ml-2">
                                                Read More
                                            </Link>
                                        </p>
                                    </li>
                                );
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;




