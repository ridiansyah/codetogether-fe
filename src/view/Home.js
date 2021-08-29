import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

const defaultBelanja = [
  { barang: "Indomie Goreng", qty: 30, satuan: "Bungkus" },
  { barang: "Sari Roti Coklat", qty: 1, satuan: "Bungkus" },
  { barang: "Apel", qty: 6, satuan: "Buah" },
];
export default function Home(props) {
  const [dataBelanja, setDataBelanja] = useState(defaultBelanja);

  return (
    <div style={{ padding: "30px" }}>
      <Card>
        <CardHeader>Daftar Belanja Keluarga Cemara</CardHeader>
        <CardBody>
          {dataBelanja.map((obj, index) => (
            <p>
              {index + 1}
              {". "}
              {obj.barang}
              {" | "}
              {obj.qty} {obj.satuan}
            </p>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
