'use client';
import styles from '@/styles/Newsletter.module.css';

export default function Newsletter() {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <h2>Stay Connected</h2>
        <p>
          Join our newsletter to receive monthly updates on our programs, success stories, and upcoming events.
        </p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.submitBtn}>
            Subscribe
          </button>
        </form>
        <p className={styles.privacyText}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
