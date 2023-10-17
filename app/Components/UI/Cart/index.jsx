function Cart({ title, poster, dsc }) {
    return (
        <div className="card border rounded-md overflow-hidden relative group h-64">
            <img
                src={poster}
                alt=""
                className="w-full h-full group-hover:scale-105 transition-all object-center group-hover:blur-sm"
            />
            <div className="absolute bottom-0 left-0 w-full bg-blue-600 justify-center items-center  translate-y-full group-hover:translate-y-0 transition-all p-2">
                <p className="">{title}</p>
                <p className="">{dsc}</p>
            </div>
        </div>
    );
}

export default Cart;
