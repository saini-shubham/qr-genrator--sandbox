import "./styles.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import QRGenerator from "./QRGenerator";
import QRCodeDocument from "./QRCodeDocument";

export default function App() {
  // const qrCodeData = [
  //   { id: 1234, value: "TEST1" },
  //   { id: 1235, value: "TEST2" },
  //   { id: 1236, value: "TEST3" },
  //   { id: 1237, value: "TEST4" }
  // ];
  const qrCodeData = [];
  for (let i = 1; i <= 20; i++) {
    const item = {
      id: i,
      value: 100 + i + ":aa"
    };
    qrCodeData.push(item);
  }

  //const qrCodeIds = qrCodeData.map((data) => data.id);
  const qrCodeIds = qrCodeData.map((data) => data.id);

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      {qrCodeData.map((data) => {
        console.log(data);
        return <QRGenerator value={data.value} documentId={data.id} />;
      })}
      {/* <h2>Download to see some magic happen!</h2> */}
      <PDFDownloadLink
        document={<QRCodeDocument ids={qrCodeIds} />}
        fileName="qrcode.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
}
