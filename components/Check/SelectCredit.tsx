import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import { Credits } from '../../interfaces/Credits';

type SelectCreditProps = {
    credits?: Credits;
    setCredits: (credits: Credits) => void;
}

const SelectCredit = ({ credits, setCredits }: SelectCreditProps) => {

    const loadCreditFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        var file = e.currentTarget.files![0];
        file.text().then(data => {
            setCredits(JSON.parse(data));
        });
    }

    useEffect(() => {
        if (credits === undefined) {
            let data = sessionStorage.getItem("credit");
            if (data !== null) {
                setCredits(JSON.parse(data));
            }
        }
    });

    return (
        <>
            <Row className="mb-3">
                <Col sm="2">
                    <Form.Label>単位情報ファイル</Form.Label>
                </Col>
                <Col sm="10">
                    <Form.Control type="file" accept="application/json" onChange={loadCreditFile} />
                </Col>
            </Row>
        </>
    )
}

export default SelectCredit;
