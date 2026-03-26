const GuaranteeSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Selo animado */}
        <div className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="308" height="307" viewBox="0 0 308 307" fill="none" className="w-[200px] h-auto md:w-[307px]">
            <g id="selo-garantia">
              <style>{`
                #borda,#texto{transform-origin:50% 50%;transform-box:view-box}
                #borda{animation:girarHorario 8s linear infinite}
                #texto{animation:girarAnti 6s linear infinite}
                @keyframes girarHorario{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
                @keyframes girarAnti{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}
              `}</style>
              <path id="b4" d="M153.663 268.23C217.33 268.23 268.942 216.617 268.942 152.95C268.942 89.2825 217.33 37.6699 153.663 37.6699C89.9954 37.6699 38.3828 89.2825 38.3828 152.95C38.3828 216.617 89.9954 268.23 153.663 268.23Z" fill="#3A1078"/>
              <path id="b3" d="M153.663 268.23C217.33 268.23 268.942 216.617 268.942 152.95C268.942 89.2825 217.33 37.6699 153.663 37.6699C89.9954 37.6699 38.3828 89.2825 38.3828 152.95C38.3828 216.617 89.9954 268.23 153.663 268.23Z" fill="url(#paint0_radial_2214_1667)"/>
              <path id="b2" d="M153.663 268.23C217.33 268.23 268.942 216.617 268.942 152.95C268.942 89.2825 217.33 37.6699 153.663 37.6699C89.9954 37.6699 38.3828 89.2825 38.3828 152.95C38.3828 216.617 89.9954 268.23 153.663 268.23Z" fill="url(#paint1_radial_2214_1667)"/>
              <path id="b1" d="M153.663 268.23C217.33 268.23 268.942 216.617 268.942 152.95C268.942 89.2825 217.33 37.6699 153.663 37.6699C89.9954 37.6699 38.3828 89.2825 38.3828 152.95C38.3828 216.617 89.9954 268.23 153.663 268.23Z" fill="url(#paint2_radial_2214_1667)"/>
              <path id="Borda" d="M153.663 268.23C217.33 268.23 268.942 216.617 268.942 152.95C268.942 89.2825 217.33 37.6699 153.663 37.6699C89.9954 37.6699 38.3828 89.2825 38.3828 152.95C38.3828 216.617 89.9954 268.23 153.663 268.23Z" stroke="url(#paint3_linear_2214_1667)" strokeWidth="2.87294"/>
              <g id="Line">
                <path d="M154.339 114.024C133.144 114.024 115.902 131.266 115.902 152.461C115.902 173.656 133.144 190.898 154.339 190.898C175.535 190.898 192.776 173.656 192.776 152.461C192.776 131.266 175.535 114.024 154.339 114.024ZM154.339 185.407C136.172 185.407 121.393 170.628 121.393 152.461C121.393 134.294 136.172 119.515 154.339 119.515C172.506 119.515 187.285 134.294 187.285 152.461C187.285 170.628 172.506 185.407 154.339 185.407Z" fill="url(#paint4_linear_2214_1667)"/>
                <path d="M168.871 139.539L148.848 159.561L139.804 150.521C138.731 149.447 136.996 149.447 135.922 150.521C134.849 151.594 134.849 153.332 135.922 154.403L146.907 165.385C147.445 165.92 148.148 166.189 148.848 166.189C149.548 166.189 150.254 165.92 150.789 165.385L172.753 143.421C173.827 142.347 173.827 140.612 172.753 139.539C171.68 138.465 169.945 138.465 168.871 139.539Z" fill="url(#paint5_linear_2214_1667)"/>
                <path d="M208.891 143.53C207.76 142.692 207.408 141.037 208.158 139.845C210.84 135.579 214.736 126.617 201.321 123.331C199.954 122.996 198.941 121.582 199.232 120.209C200.52 114.186 198.716 105.438 186.592 107.569C185.211 107.811 183.742 106.861 183.47 105.48C182.561 100.862 178.646 91.5077 166.959 98.6405C165.756 99.3736 163.84 98.9755 163.274 97.9047C161.459 94.4756 153.511 86.5685 145.401 97.9047C144.583 99.0496 142.702 99.3434 141.716 98.6378C136.396 94.827 127.799 93.8743 125.202 105.474C124.903 106.806 123.486 107.827 122.078 107.561C117.427 106.677 107.219 106.968 109.446 120.201C109.679 121.587 108.748 123.117 107.359 123.325C101.942 124.135 93.5904 128.487 100.517 139.837C101.25 141.037 101.039 142.887 99.7843 143.521C94.9769 145.951 89.4722 154.594 99.7843 161.403C100.957 162.177 101.25 163.844 100.517 165.043C93.5904 176.393 101.942 180.742 107.359 181.555C108.751 181.763 109.679 183.293 109.446 184.679C107.219 197.913 117.427 198.204 122.083 197.317C123.492 197.048 124.908 198.072 125.208 199.403C127.805 211.006 136.401 210.05 141.722 206.24C142.708 205.534 144.588 205.828 145.406 206.973C153.517 218.312 161.465 210.405 163.28 206.973C163.845 205.905 165.762 205.504 166.964 206.237C178.652 213.37 182.567 204.016 183.476 199.398C183.747 198.017 185.216 197.067 186.597 197.309C198.721 199.439 200.522 190.692 199.237 184.668C198.944 183.295 199.96 181.882 201.327 181.547C214.744 178.26 210.848 169.299 208.163 165.032C207.414 163.841 207.738 162.15 208.891 161.353C212.476 158.874 220.23 151.92 208.891 143.53ZM204.97 170.886C205.904 172.388 205.327 174.452 203.202 175.152C199.309 176.437 192.135 177.494 194.048 188.858C194.414 191.019 193.258 192.312 190.781 192.122C187.014 191.834 179.258 190.31 177.081 201.279C176.65 203.445 174.528 203.914 172.815 203.049C165.424 199.318 162.467 198.84 156.652 206.264C155.54 207.684 153.223 207.623 152.031 206.264C148.907 202.703 145.368 197.229 135.866 203.052C134.213 204.065 132.33 203.283 131.599 201.284C129.702 196.079 129.142 190.53 117.896 192.13C116.161 192.378 114.322 191.202 114.632 188.866C115.222 184.396 115.9 177.22 105.473 175.161C103.864 174.842 102.607 172.695 103.705 170.894C107.87 164.082 107.293 159.821 100.429 154.701C99.6553 154.124 98.3951 151.645 100.49 150.146C107.175 145.364 107.87 140.798 103.705 133.983C102.604 132.182 103.864 130.033 105.473 129.717C115.9 127.658 115.222 120.481 114.632 116.011C114.322 113.675 116.164 112.5 117.896 112.747C129.142 114.345 129.702 108.799 131.599 103.593C132.327 101.592 134.213 100.812 135.866 101.825C145.371 107.649 148.91 102.174 152.031 98.6131C153.223 97.2541 155.537 97.1937 156.652 98.6131C162.467 106.037 165.424 105.559 172.815 101.828C174.528 100.963 176.65 101.433 177.081 103.599C179.258 114.567 187.014 113.043 190.781 112.755C193.261 112.566 194.414 113.859 194.048 116.02C192.135 127.386 199.309 128.44 203.202 129.725C205.327 130.425 205.904 132.493 204.97 133.992C198.864 143.799 205.316 147.697 208.185 150.157C209.305 151.118 209.95 153.389 208.443 154.564C205.014 156.936 198.864 161.079 204.97 170.886Z" fill="url(#paint6_linear_2214_1667)"/>
              </g>
              <defs>
                <path id="circlePath" d="M153.5,10 a143.5,143.5 0 1,1 0,287 a143.5,143.5 0 1,1 0,-287" fill="none"/>
              </defs>
              <g id="texto">
                <text fill="#1a1a2e" fontSize="13.5" fontFamily="'Poppins', sans-serif" fontWeight="600" letterSpacing="2.5">
                  <textPath href="#circlePath" startOffset="0%">
                    GARANTIA DE 30 DIAS SEM RISCOS • GARANTIA DE 30 DIAS SEM RISCOS • GARANTIA DE 30 DIAS SEM RISCOS •
                  </textPath>
                </text>
              </g>
              <defs>
                <radialGradient id="paint0_radial_2214_1667" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(113.233 43.8845) rotate(77.4017) scale(102.898 104.701)">
                  <stop stopColor="#D9D9D9" stopOpacity="0.2"/><stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint1_radial_2214_1667" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(129.505 55.6986) rotate(33.4197) scale(131.085 164.726)">
                  <stop stopColor="white" stopOpacity="0.09"/><stop offset="1" stopColor="white" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint2_radial_2214_1667" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(153.663 362.211) rotate(-26.8849) scale(188.688 243.982)">
                  <stop stopColor="white" stopOpacity="0.08"/><stop offset="1" stopColor="white" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="paint3_linear_2214_1667" x1="153.663" y1="36.2336" x2="153.663" y2="269.666" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BD95FF"/><stop offset="1" stopColor="#BD95FF" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint4_linear_2214_1667" x1="154.339" y1="114.024" x2="154.339" y2="190.898" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CDAEFF"/><stop offset="1" stopColor="#5B3F88"/>
                </linearGradient>
                <linearGradient id="paint5_linear_2214_1667" x1="154.338" y1="138.733" x2="154.338" y2="166.189" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CDAEFF"/><stop offset="1" stopColor="#5B3F88"/>
                </linearGradient>
                <linearGradient id="paint6_linear_2214_1667" x1="154.381" y1="92.0146" x2="154.381" y2="212.865" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#CDAEFF"/><stop offset="1" stopColor="#5B3F88"/>
                </linearGradient>
              </defs>
            </g>
          </svg>
        </div>

        {/* Texto de garantia */}
        <div className="max-w-lg">
          <h2
            className="text-4xl md:text-[62px] font-semibold leading-tight mb-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: "linear-gradient(81deg, #1a1a2e 25.49%, #4a4a6a 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ESSE PRODUTO TEM GARANTIA INCONDICIONAL DE 30 DIAS!
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Você está sob proteção do Código de Defesa do Consumidor – LEI Nº 8.078, de 11 de setembro de 1990.
            <br /><br />
            Entendemos a importância de escolher o método certo para seu desenvolvimento pessoal e saúde. Nosso ebook digital o Livro da Sabedoria é cuidadosamente elaborado por especialistas, com conteúdo atualizado e prático.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
