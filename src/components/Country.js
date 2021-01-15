import React, { useState, useEffect } from "react";

const Country = ({ result }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    name,
    capital,
    region,
    subregion,
    population,
    numericCode,
    flag,
    callingCodes,
    currencies,
    borders,
    languages,
    timezones,
  } = result;

  const toggleModal = (name) => {
    if (name === result.name) {
      setModalOpen(true);
    }
  };
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modalOpen]);

  return (
    <>
      <div onClick={() => toggleModal(result.name)} className="flagItem">
        <img src={flag} alt={name} />
        <p>{name}</p>
      </div>
      {modalOpen && (
        <div className="modal">
          <div
            className="modal-inner"
            style={{ backgroundImage: `url(${flag})` }}
          >
            <div className="overlay"></div>
            <div className="aws">
              <h1>{name}</h1>
              <p>Population: {population}</p>
              <p>Region: {region}</p>
              <p>Sub Region: {subregion}</p>
              <p>Capital City: {capital}</p>
              <p>Numeric Code: {numericCode}</p>
              <p>Calling Codes: {callingCodes}</p>
              <div>
                <h4>Currencies:</h4>
                {currencies.map((item, index) => {
                  return (
                    <ul key={index} className="currency">
                      <li>Code: {item.code}</li>
                      <li>Name: {item.name}</li>
                      <li>Symbol: {item.symbol}</li>
                    </ul>
                  );
                })}
              </div>
              <div>
                <h4>Borders:</h4>
                <ul className="borders">
                  {borders.map((item, index) => {
                    return <li key={index}>{item},</li>;
                  })}
                </ul>
              </div>
              <div>
                <h4>Languages:</h4>
                <ul>
                  {languages.map((item, index) => {
                    return <li key={index}>{item.name}</li>;
                  })}
                </ul>
              </div>
              <ul className="timezones">
                <h4>Timezones:</h4>
                {timezones.map((item, index) => {
                  return <li key={index}>{item},</li>;
                })}
              </ul>
              <span onClick={() => setModalOpen(false)}>&times;</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
