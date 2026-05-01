import campusImage from '../assets/UCDavisImage.png'

function UCDavisLogo() {
  return (
    <svg width="167" height="27" viewBox="0 0 167 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M146.292 24.5799L149.014 17.6658L149.487 18.1267C151.143 19.3936 153.273 20.5468 155.404 20.5468C157.297 20.6606 158.244 20.0859 158.008 18.5876C157.771 17.4344 156.468 17.2049 155.64 17.0892L153.747 16.744C150.197 16.0518 147.238 13.8631 147.238 9.82898C147.238 3.72093 152.682 0.263402 158.125 0.263402C160.964 0.263402 163.688 0.954727 166.054 2.45305L163.806 8.5611C162.504 7.75409 160.611 6.48713 158.125 6.37145C157.297 6.37145 155.521 6.71758 156.113 8.5611C156.351 9.3681 157.533 9.71422 158.125 9.82898L160.255 10.2899C164.16 11.2116 167 13.2865 167 17.7815C167 23.8895 161.437 27 155.995 27C152.801 27 149.131 26.0782 146.292 24.5799ZM135.169 26.5391V0.6086H144.399V26.5391H135.169ZM124.637 0.6086H134.223L124.52 26.5391H116.71L107.006 0.6086H116.473L119.904 12.4786C120.259 13.7465 120.496 15.0134 120.496 16.2822H120.732C120.732 15.0134 120.969 13.7465 121.324 12.4786L124.637 0.6086ZM93.0442 0.6086H103.22L112.333 26.5391H102.628L101.682 23.313H94.8183L94.1094 26.5391H84.4067L93.0442 0.6086ZM96.4755 17.2049H100.142C99.5209 14.1685 98.8729 11.1357 98.2495 8.10022L96.4755 17.2049ZM60.6217 26.5391H72.2182C79.6737 26.5391 84.9978 21.699 84.9978 13.9769C84.9978 4.41225 78.4906 0.609525 69.9709 0.609525H60.6227L60.6217 26.5391ZM69.7334 8.33066H70.3254C73.7566 8.33066 75.7692 10.2899 75.7692 13.9769C75.7692 17.3187 73.521 19.1641 70.4442 19.1641H69.7334V8.33066ZM54.9422 1.4156L55.5342 5.67921C55.653 6.71665 56.244 9.13674 55.4154 8.79061C55.0601 8.67493 54.5868 7.52273 54.2315 6.60097C54.1127 6.0244 53.1663 3.72 52.9297 3.48864C51.7466 2.68256 48.9064 1.7608 47.0126 1.7608C41.0956 1.7608 37.1911 5.90872 37.1911 13.4013C37.1911 18.8171 39.7947 25.2712 46.5394 25.2712C49.0243 25.2712 53.6395 24.4633 54.8225 21.1233C55.4145 19.625 55.8877 18.3562 56.2431 18.7032C56.5985 19.0484 56.2431 20.1997 56.0065 20.892C55.2957 24.0024 55.1779 24.926 54.9413 25.0399C51.9832 26.5382 48.0778 26.9991 44.6466 26.9991C33.7599 26.9991 30.092 20.891 30.092 14.6682C30.092 4.0652 36.8367 -0.428844 47.2502 0.0320363C49.8538 0.0329617 52.4565 0.493844 54.9422 1.4156ZM22.9929 1.87649L21.2179 1.29992C20.6269 0.839042 21.3367 0.723358 21.3367 0.723358C21.3367 0.723358 23.9393 1.18424 30.093 0.607675C30.093 0.607675 30.685 0.723359 30.3296 1.18424L28.318 1.99124C26.8974 2.56781 26.8974 2.22261 26.8974 3.72V16.8569C26.8974 27.2304 16.1295 26.9991 14 26.9991C13.0536 26.9991 3.23116 26.9991 3.23116 18.7023V4.75745C3.23116 2.22261 3.46871 2.33737 2.63917 2.10693L0.154341 1.18516C0.154341 1.18516 -0.31887 0.493843 0.391896 0.6086C2.52134 0.724283 5.47938 1.06948 12.3428 0.6086C12.3428 0.6086 12.9348 0.724284 12.5804 1.18516L10.5678 1.76173C8.91159 2.45305 9.14819 1.87648 9.14819 3.48956V17.3187C9.14819 20.6606 10.9232 24.927 16.4849 24.927C24.1759 24.927 24.2947 18.4719 24.2947 16.9735V3.3748C24.2947 2.10692 24.176 2.45212 22.9929 1.87649Z" fill="#164C82"/>
    </svg>
  )
}

export default function Login() {
  return (
    <div className="flex h-screen w-screen bg-white">
      {/* Left panel */}
      <div className="flex w-1/2 items-center justify-center bg-white">
        <div className="flex w-[403px] flex-col gap-8">
          {/* Wordmark */}
          <div className="flex items-center gap-3">
            <UCDavisLogo />
            <span className="text-[40px] font-normal leading-none text-[#737373]">
              Insight
            </span>
          </div>

          {/* Login card */}
          <div className="w-full rounded-sm bg-white px-8 py-[30px] shadow-[0px_4px_28.6px_0px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col gap-9">
              {/* Heading */}
              <div className="flex flex-col gap-2.5">
                <p className="text-[20px] leading-none text-[#171717]">
                  Sign In to <span className="font-semibold">Insight</span>
                </p>
                <p className="text-[16px] leading-normal text-[#737373]">
                  Use your UC Davis Account to Log In
                </p>
              </div>

              {/* Form */}
              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[5px]">
                  <label
                    htmlFor="username"
                    className="text-[16px] leading-normal text-[#737373]"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="h-[42px] w-full rounded-[3px] border border-[#bebebe] px-3 text-[16px] text-[#171717] outline-none focus:border-[#022851] focus:ring-1 focus:ring-[#022851]"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-[6px] bg-[#022851] px-[18px] py-3 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Continue
                </button>
              </div>

              {/* Support link */}
              <div className="text-center text-[16px] leading-normal text-[#737373]">
                Need support?{' '}
                <a
                  href="#"
                  className="text-[#022851] underline hover:opacity-80"
                >
                  Contact IT Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — campus photo */}
      <div className="w-1/2">
        <img
          src={campusImage}
          alt="UC Davis campus"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
