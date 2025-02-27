import dataDevInfo from "./data/data";
const Footer = () => {

    return (
        <>
            {dataDevInfo.map(data => (
                <div className="attribution" key={data.id}>
                    <span>Challenge by&nbsp;</span>
                    <a
                        href={data.challengerURL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <b>{data.challengerName}</b>
                    </a>.
                    <span>Coded by&nbsp;</span>
                    <a
                        href={data.coderURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid='coder-link'
                    >
                        <b>{data.coderName}</b>
                    </a>.
                </div>
            ))}
        </>
    );
};

export default Footer;