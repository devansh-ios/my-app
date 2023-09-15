import "./downpart.css";
const Downpart = () => {
  return (
    <>
      <div className="downPart">
        <div className="pieChart">
          <span className="heading">Top Products</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="180"
            viewBox="0 0 134 134"
            fill="none"
          >
            <mask
              id="mask0_0_281"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="134"
              height="134"
            >
              <circle
                cx="67"
                cy="67"
                r="67"
                transform="rotate(180 67 67)"
                fill="#C4C4C4"
              />
            </mask>
            <g mask="url(#mask0_0_281)">
              <rect
                x="140.634"
                y="139.307"
                width="145.941"
                height="145.941"
                transform="rotate(180 140.634 139.307)"
                fill="#98D89E"
              />
              <path
                d="M81.5941 -3.31683L67.6634 66.3366L140.634 37.6941V-6.63367L81.5941 -3.31683Z"
                fill="#EE8484"
              />
              <path
                d="M140.634 139.307V37.8119L68.3267 65.6733V139.307H140.634Z"
                fill="#F7DC7D"
              />
            </g>
          </svg>

          <div className="info">
            <p className="small_circle"></p>
            <h5>Basic Tees</h5>
            <h6>55%</h6>

            <p className="small_circle sm2"></p>
            <h5>Custom Short Pants</h5>
            <h6>31%</h6>

            <p className="small_circle sm3"></p>
            <h5>Super Hoodies</h5>
            <h6>14%</h6>
          </div>
        </div>

        <div className="scheduling">
          <h4>Todays schedule</h4>
          <div className="first">
            <h3>Meeting with suppliers from Kuta Bali</h3>
            <p>14:00 - 15:00</p>
            <p> at Sunset road,Kuta,Bali</p>
          </div>
          <div className="second">
          <h3>Check operation at Giga Factory 1</h3>
          <p>18:00 - 20:00</p>
          <p> at Central Jakarta</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Downpart;
