type TProps  ={
    params: {
        id: string;
    };
}

const CarPage = ({ params }: TProps) => {
    const { id } = params;

    return (
        <div>
            carz : {id}
        </div>
    );
};

export default CarPage;