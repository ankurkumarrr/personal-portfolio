import React, { useState } from 'react';
import './work.css'; // Ensure to import your stylesheet

const WorkItems = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const getIconClassName = () => {
    switch (item.linkType) {
      case 1:
        return "bx bxl-github";
      case 2:
        return "bx bxs-file-pdf";
      default:
        return "bx bx-link";
    }
  };

  return (
    <>
      <div className="work__card" key={item.id}>
        <div className="work__title-container">
          <h3 className="work__title">{item.title}</h3>
          {item.link && (
            <a href={item.link} className="work__github-button" target="_blank" rel="noopener noreferrer">
              <i className={getIconClassName()}></i>
            </a>
          )}
        </div>
        <img src={item.image} alt="" className="work__img" />
        <div className="work__buttons">
          <button className="work__button" onClick={handleOpenModal}>
            View More <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="work__modal active-modal">
          <div className="work__modal-content">
            <span className="work__modal-close" onClick={handleCloseModal}>&times;</span>
            <h3 className="work__modal-title">{item.title}</h3>
            <img src={item.image} alt="" className="work__modal-img" />
            <p className="work__modal-description">{item.desc}</p>
            <div className="work__modal-buttons">
              {item.link && (
                <a href={item.link} className="work__modal-button" target="_blank" rel="noopener noreferrer">
                  <i className={getIconClassName()}></i>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkItems;
