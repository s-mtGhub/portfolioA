import { useInView } from '../hooks/useInView'

/** Section shell: consistent padding, a gradient heading, and a scroll reveal. */
export default function Section({ id, title, children, className = '' }) {
  const [ref, inView] = useInView()

  return (
    <section id={id} className={`px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div ref={ref} className={`mx-auto max-w-7xl reveal ${inView ? 'is-visible' : ''}`}>
        {title && (
          <h2 className="gradient-text mb-12 text-center text-3xl font-bold sm:text-4xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
