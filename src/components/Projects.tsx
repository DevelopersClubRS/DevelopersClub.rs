import Link from 'next/link'

export default function Projects() {
  return (
    <section>
      <div>
        <div
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <h2>
            Pogledaj naše projekte i događaje
          </h2>
          <p>
            Pogledajte kako naši članovi rade na inovativnim projektima i učestvuju u ekskluzivnim
            događanjima, gde stiču nova znanja i stvaraju veze sa profesionalcima iz celog sveta.
          </p>
          <Link
            href="https://github.com/developersClubRS"
          >
            Saznaj više
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
