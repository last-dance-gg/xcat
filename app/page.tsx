import Hero from "./_components/hero/Hero"
import "./global.css"
import Crew from "./_components/crew/Crew"

import styles from "./page.module.css"

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
      <div className={styles.stars}>
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <Suspense>
            <color attach="background" args={["#02030b"]} />
            <Stars />
          </Suspense>
        </Canvas>
      </div>
      </div>
      <Hero />
      <Crew />
    </div>
  )
}
