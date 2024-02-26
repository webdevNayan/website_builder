import React from 'react';

function BreadCrumbs() {
  const breadcrumbStyle = {
    margin: "1.5rem 0rem 2.5rem 0rem",
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight:" 400",
    lineHeight:" 20px",
    letterSpacing:" 0em",
    textAlign: "left",
    color: "#5C6874"
  };

  return (
    <div style={breadcrumbStyle}>
      <span> Home </span> {'>'}
      <span> Hosting for all </span> {'>'}
      <span> Hosting </span> {'>'}
      <span> Hosting6 </span> {'>'}
      <span> Hosting5 </span>
    </div>
  );
}

export default BreadCrumbs;

