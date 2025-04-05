import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-slate-950/95 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header section */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 mb-12">
          <Link href="/" className="shrink-0">
            <Image
              src="/img/developers-club-logo-white.svg"
              alt="Developers Club"
              width={120}
              height={28}
              className="brightness-[0.95]"
            />
          </Link>
          <p className="text-lg text-blue-50/90">
            Delimo znanje. <span className="text-devclub">Gradimo budućnost.</span>
          </p>
        </div>

        <hr className="border-white/5 mb-12" />

        {/* Info section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-blue-50/90 font-medium mb-4">Kontakt</h4>
            <a
              href="mailto:info@developersclub.rs"
              className="text-sm text-blue-50/70 hover:text-devclub transition-colors"
            >
              info@developersclub.rs
            </a>
          </div>

          <div>
            <h4 className="text-blue-50/90 font-medium mb-4">Lokacija</h4>
            <p className="text-sm text-blue-50/70">Novi Sad, Srbija</p>
          </div>

          <div>
            <h4 className="text-blue-50/90 font-medium mb-4">Društvene mreže</h4>
            <div className="flex gap-4">
              {[
                {
                  name: 'LinkedIn',
                  url: 'https://www.linkedin.com/company/developers-club-rs/',
                  svg: (
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      ></path>
                    </svg>
                  ),
                },
                {
                  name: 'YouTube',
                  url: 'https://www.youtube.com/@developersclubrs',
                  svg: (
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fillRule="evenodd"
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                      ></path>
                    </svg>
                  ),
                },
                {
                  name: 'GitHub',
                  url: 'https://github.com/developersClubRS',
                  svg: (
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  name: 'Instagram',
                  url: 'https://www.instagram.com/developersclubrs/',
                  svg: (
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fillRule="evenodd"
                        d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
                      ></path>
                    </svg>
                  ),
                },
                {
                  name: 'Facebook',
                  url: 'https://www.facebook.com/DevelopersClubRS/',
                  svg: (
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fillRule="evenodd"
                        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                      ></path>
                    </svg>
                  ),
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="text-blue-50/60 hover:text-devclub transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-5 h-5 flex items-center justify-center">{social.svg}</div>
                  <span className="sr-only">{social.name} page</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-blue-50/70 text-center">
          © 2025 <span className="text-devclub">Developers Club™</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
