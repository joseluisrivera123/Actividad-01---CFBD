function Posts(props: any){
    return(
       
      <article className="bg-black text-white p-4 rounded-xl hover:bg-white hover:text-black hover:border-black ">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.fecha}</p>
      </article>
    );
}

export default Posts;
