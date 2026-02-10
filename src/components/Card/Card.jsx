import "./Card.css";

const Card = () => {
    return (
        <section id="home" className="container d-flex align-items-center min-vh-100  min-vw-100" style={{
background: "linear-gradient(135deg, #a4b7d7ff, #111111ff 100%)"
}}>
<div className="row w-100 align-items-center">
<div className="col-md-6" >
<h1 className="display-4 fw-bold" style={{ color: "#101516ff" }}>Hello I'm Pujitha Ulluri
</h1>
<h2 className="fw-normal" style={{ color: "#010405ff" }}>I’m a passionate Full Stack Developer fresher, eager to build complete web applications using modern frontend and backend technologies.</h2>


</div>


<div className="col-md-6 text-center">
<div
className=" mx-auto "
style={{
paddingBottom:"100px",
width: "380px",
height: "380px",
borderRadius: "20px",
backgroundImage: "url('images//profile.jpeg')",
backgroundSize: "cover",
backgroundPosition: "center"
}}
/>
</div>
</div>
</section>
    )
}
export default Card;