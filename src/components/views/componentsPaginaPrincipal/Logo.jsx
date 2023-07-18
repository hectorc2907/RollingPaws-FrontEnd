import "bootstrap/dist/css/bootstrap.min.css";

const Logo = () => {
  return (
    <section className="container">
      <article className="">
        <h6 className="text-warning">Bienvenido a</h6>
        <h1 className="text-info">Rolling Paws</h1>
      </article>
      <article>
        <img className="img-fluid" src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80" alt="" />
      </article>
      <p className="fs-3">Everything you need in one spot for Spot.</p>
    </section>
  );
};

export default Logo;
