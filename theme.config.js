const YEAR = new Date().getFullYear();
export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Srikavya Vasala.
      </small>
      <style jsx>{`
        footer {
          margin-top: 7rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};
