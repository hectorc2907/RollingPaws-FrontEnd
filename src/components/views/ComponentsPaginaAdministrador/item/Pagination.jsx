const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            href="#"
          >
            Anterior
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a
              className="page-link"
              onClick={() => onPageChange(number)}
              href="#"
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === pageNumbers.length ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            href="#"
          >
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
