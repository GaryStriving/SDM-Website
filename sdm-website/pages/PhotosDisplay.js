import Image from 'next/image';

function PhotoDisplay(props) {
    return (
        <div>
            <div style={{ fontSize: "1.125em", width: "40%", backgroundColor: "#F6A800", height: "360px", padding: "20px", borderRadius: "32px", lineHeight: "27px", display: 'inline-block', margin: '0 0 25px 15%' }}>
                {props.children}
            </div>
            <div style={{ float: "right", margin: '0 15% 25px 0' }}>
                <Image src={props.imgSrc} width={360} height={360} />
            </div>
        </div>
    );
}


function PhotosDisplayBox(props) {
    return (
        <div>
            <h1 style={{ fontSize: "4.375em", textAlign: "center", fontWeight: "bold", margin: "3rem" }}>{props.title}</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export { PhotoDisplay, PhotosDisplayBox };