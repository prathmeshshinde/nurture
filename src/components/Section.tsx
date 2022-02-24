import { Api } from "./api";

export const Section = () => {
  const [item] = Api();

  return (
    <div className="section-section">
      <div className="main">
        <div className="section-main">
          <p>Section</p>
        </div>

        <div className="wallet">
          <img alt="bit" src="./icons/Wallet.svg" style={{ width: "30px" }} />
          <p className="wallet-text">0.2 $XYZ</p>
          <p className="tier">Tier 1</p>
        </div>
      </div>
      <div className="ad">
        <div className="lorem">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="tuts">Tutorial</button>
        </div>
        <div className="bit">
          <img
            alt="bit"
            src="./icons/11.svg"
            style={{
              width: "120px",
              margin: "5px -10px -20px 0px",
            }}
          />
        </div>
        <div>
          <img
            alt="bit"
            src="./icons/close.svg"
            style={{
              position: "absolute",
              width: "20px",
              margin: "-10px 0px 0px -10px",
            }}
          />
        </div>
      </div>
      <div className="reward">
        <div>
          <p>Your rewards</p>
        </div>
        <div className="dollar">
          <p>$ 0.26231428</p>
          <button className="button-custom">
            <img
              alt="bit"
              src="./icons/link.svg"
              style={{
                width: "20px",
              }}
            />
            <p>Custom link</p>
          </button>
        </div>
        <div className="crypto">
          <p>$40 AVAX</p>
          <p>$10 BNB</p>
          <p>$210 BTC</p>
        </div>
      </div>
      <div className="referral">
        <div className="fee">
          <div className="money-cont">
            <div className="money">
              <img
                alt="bit"
                src="./icons/bag.svg"
                style={{
                  width: "20px",
                }}
              />
              <p>12.5% of fee</p>
            </div>
            <p>Your Referral Link for XYZ</p>
            <div className="unity">
              <p>https://unityexchange.design</p>
              <img
                alt="bit"
                src="./icons/copy.svg"
                style={{
                  width: "20px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="fee">
          <div className="money-cont">
            <div className="money">
              <img
                alt="bit"
                src="./icons/bag.svg"
                style={{
                  width: "20px",
                }}
              />
              <p>12.5% of fee</p>
            </div>
            <p>Your Referral Link for XYZ</p>
            <div className="unity">
              <p>https://unityexchange.design</p>
              <img
                alt="bit"
                src="./icons/copy.svg"
                style={{
                  width: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="tab">
          <p className="tab-text">First Tab</p>
          <p className="tab-text-sec">Second Tab</p>
        </div>
      </div>
      <div>
        <div className="user-table">
          <table>
            <tr className="heading">
              <th>ASSET</th>
              <th>AMOUNT</th>
              <th>USER ACCOUNT</th>
              <th>REFERRAL EARNING</th>
            </tr>

            {item.map((items) => (
              <tr>
                <td className="col-bit">
                  <div>
                    <img
                      alt="bit"
                      src={item[0].img}
                      style={{
                        width: "25px",
                        margin: "20px 0px 0px 0px",
                      }}
                    />
                  </div>
                  <div className="bitcoin">
                    <p className="bit-text">{item[0].asset}</p>
                    <div className="sec-put">
                      <p className="put">{item[0].type}</p>
                      <div className="ava">
                        <img
                          alt="bit"
                          src={item[0].chain.img}
                          style={{
                            width: "15px",
                            height: "15px",
                            margin: "-2px 0px 0px 0px",
                          }}
                        />
                        <p className="avax">{item[0].chain.name}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="bnb-coin">
                  <p className="bnb">{item[0].amount}</p>
                  <p className="put">
                    {item[0].state.charAt(0).toUpperCase() +
                      item[0].state.slice(1)}
                  </p>
                </td>
                <td className="user">
                  <p>{item[0].user}</p>
                </td>
                <td className="sec-scan">
                  <p>{item[0].referral_earnings}.BNB</p>
                  <div
                    className="put"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p className="put">View on BSC Scan </p>
                    <img
                      alt="bit"
                      src="./icons/link.svg"
                      style={{
                        width: "12px",
                        color: "#808191",
                        margin: "5px",
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
