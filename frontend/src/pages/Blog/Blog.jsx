import React, { useState } from 'react';
import { Clock, ArrowRight, Tag, BookOpen, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import styles from './Blog.module.css';

const categories = ['All', 'Elder Care', 'Nursing', 'Physiotherapy', 'Wellness', 'Tips & Guides'];

const blogPosts = [
  {
    id: 1,
    title: 'How Home Nursing Care Helps Faster Recovery After Surgery',
    excerpt: 'Post-surgical recovery at home with trained nurses can reduce infection risk by up to 40% and speed up healing. Learn why hospitals now recommend home nursing.',
    category: 'Nursing',
    date: 'Jun 10, 2026',
    readTime: '5 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    id: 2,
    title: '10 Essential Tips for Caring for Elderly Parents at Home',
    excerpt: 'Practical advice on creating a safe, comfortable, and nurturing environment for your aging parents while balancing your daily responsibilities.',
    category: 'Elder Care',
    date: 'Jun 8, 2026',
    readTime: '7 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
  },
  {
    id: 3,
    title: 'Physiotherapy at Home: Why It Works Better Than Clinic Visits',
    excerpt: 'Home-based physiotherapy sessions offer personalized attention and comfort, leading to better patient compliance and faster rehabilitation outcomes.',
    category: 'Physiotherapy',
    date: 'Jun 5, 2026',
    readTime: '4 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  },
  {
    id: 4,
    title: 'Understanding ICU-Level Home Care: What Families Need to Know',
    excerpt: 'Critical care doesn\'t have to mean hospital stays. Discover how ICU-trained home nurses bring ventilator support, monitoring, and emergency protocols to your doorstep.',
    category: 'Nursing',
    date: 'Jun 2, 2026',
    readTime: '6 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80',
  },
  {
    id: 5,
    title: 'Nutrition Guide for Bedridden Patients: Expert Recommendations',
    excerpt: 'Proper nutrition is vital for recovery. Our dieticians share meal plans, feeding techniques, and supplement guidance for patients confined to bed rest.',
    category: 'Wellness',
    date: 'May 28, 2026',
    readTime: '8 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
  },
  {
    id: 6,
    title: 'How to Choose the Right Home Healthcare Provider in India',
    excerpt: 'A comprehensive guide covering credentials, certifications, pricing transparency, and red flags to watch for when selecting a home care service.',
    category: 'Tips & Guides',
    date: 'May 25, 2026',
    readTime: '6 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className={`${styles.pageWrapper} animate-fade-in`}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.bgGlows}>
          <div className={styles.glow1}></div>
          <div className={styles.glow2}></div>
          <div className={styles.glow3}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <span className={styles.topTag}>
                <BookOpen size={14} />
                Health & Wellness Blog
              </span>
              <h1 className={styles.heroTitle}>
                Insights for Better <br className={styles.desktopBreak} /> <span className={styles.gradientText}>Home Healthcare</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Expert medical articles, caregiving tips, and wellness guides curated by our team of doctors and specialists.
              </p>

              <div className={styles.heroBadges}>
                <div className={styles.heroBadgeItem}>
                  <Users size={14} />
                  <span><strong>10K+</strong> <span className={styles.desktopText}>Weekly </span>Readers</span>
                </div>
                <div className={styles.heroBadgeDivider}></div>
                <div className={styles.heroBadgeItem}>
                  <ShieldCheck size={14} />
                  <span><strong className={styles.desktopText}>Verified </strong><strong>Medically</strong> Audited</span>
                </div>
                <div className={styles.heroBadgeDivider}></div>
                <div className={styles.heroBadgeItem}>
                  <TrendingUp size={14} />
                  <span><strong>50+</strong> <span className={styles.desktopText}>Expert </span>Articles</span>
                </div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.interactivePanel}>
                {/* Floating Card 1: Trending Article Preview */}
                <div className={`${styles.floatingCard} ${styles.articleCard}`}>
                  <div className={styles.cardGlow}></div>
                  <div className={styles.miniPostHeader}>
                    <span className={styles.miniTag}>Trending</span>
                    <span className={styles.miniTime}>5 min read</span>
                  </div>
                  <h4 className={styles.miniTitle}>Post-Surgical Recovery Care at Home</h4>
                  <p className={styles.miniDesc}>Reducing hospital readmission risks by up to 40% with specialized clinical nursing care...</p>
                  <div className={styles.miniAuthor}>
                    <div className={styles.avatar}>DR</div>
                    <div className={styles.avatarInfo}>
                      <h5>Dr. Rahul Sharma</h5>
                      <p>Chief Medical Advisor</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2: Interactive Topics Cloud */}
                <div className={`${styles.floatingCard} ${styles.topicsCard}`}>
                  <h4>Popular Topics</h4>
                  <div className={styles.topicsCloud}>
                    <span className={styles.topicChip}>#ElderCare</span>
                    <span className={styles.topicChip}>#Nursing</span>
                    <span className={styles.topicChip}>#Physiotherapy</span>
                    <span className={styles.topicChip}>#PostOpCare</span>
                    <span className={styles.topicChip}>#DietGuide</span>
                  </div>
                </div>

                {/* Floating Card 3: Trust Badge */}
                <div className={`${styles.floatingCard} ${styles.trustCard}`}>
                  <div className={styles.shieldPulse}>
                    <ShieldCheck size={20} className={styles.shieldIcon} />
                  </div>
                  <div className={styles.trustText}>
                    <h5>NABL Accredited</h5>
                    <p>Clinical Protocols</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === 'All' && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span className={styles.featuredBadge}>
                  <TrendingUp size={12} />
                  Featured
                </span>
              </div>
              <div className={styles.featuredBody}>
                <span className={styles.categoryTag}>{featuredPost.category}</span>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                <div className={styles.featuredMeta}>
                  <span className={styles.metaItem}>
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                  <span className={styles.metaItem}>{featuredPost.date}</span>
                </div>
                <button className={styles.readMoreBtn}>
                  Read Full Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter + Posts Grid */}
      <section className={styles.postsSection}>
        <div className={styles.container}>
          {/* Category Pills */}
          <div className={styles.categoryBar}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryPill} ${activeCategory === cat ? styles.activePill : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'All' && <Tag size={13} />}
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className={styles.postsGrid}>
            {(activeCategory === 'All' ? regularPosts : filteredPosts).map((post) => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.postImageWrap}>
                  <img src={post.image} alt={post.title} className={styles.postImage} />
                  <span className={styles.postCategory}>{post.category}</span>
                </div>
                <div className={styles.postBody}>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <div className={styles.postMeta}>
                      <Clock size={13} />
                      <span>{post.readTime}</span>
                      <span className={styles.metaDot}>•</span>
                      <span>{post.date}</span>
                    </div>
                    <button className={styles.postReadMore}>
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className={styles.emptyState}>
              <BookOpen size={48} />
              <h3>No articles found</h3>
              <p>We're working on new content for this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
