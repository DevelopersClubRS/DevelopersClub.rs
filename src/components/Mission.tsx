import Image from 'next/image'
import { Fragment } from 'react'

export default function Mission() {
  const missionItems = [
    {
      img: '/img/okupljamo.jpg',
      alt: 'Okupljamo',
      title: 'Povezivanje',
      text: 'Stvaramo digitalni ekosistem gde se IT profesionalci povezuju, razmenjuju ideje i grade budućnost tehnologije zajedno.',
    },
    {
      img: '/img/kreiramo.jpg',
      alt: 'Kreiramo',
      title: 'Inovacija',
      text: 'Razvijamo napredne platforme i događaje koji omogućavaju članovima da budu na čelu tehnoloških trendova i inovacija.',
    },
    {
      img: '/img/edukujemo.jpg',
      alt: 'Edukujemo',
      title: 'Transformacija',
      text: 'Kroz napredne edukativne programe i mentorstva, transformišemo talente u lidere koji oblikuju budućnost tehnologije.',
    },
  ]

  return (
    <section id="mission">
      <div>
        <h2>Naša Vizija</h2>
        <p>
          Oblikujemo budućnost tehnologije kroz zajednicu inovatora, pionira i vizionara koji
          zajedno grade digitalni svet sutrašnjice.
        </p>

        <div>
          {missionItems.map((item, index) => (
            <Fragment key={index}>
              <div>
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div>
                  <div>
                    <h3>{item.alt}</h3>
                  </div>
                  <h4>{item.title}</h4>
                </div>
              </div>
              <p>{item.text}</p>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
