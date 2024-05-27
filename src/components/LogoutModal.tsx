import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LogoutModal() {
  const [loading, setLoading] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)

  const navigate = useNavigate()

  const closeHandle = () => setShow(false)
  const showHandle = () => setShow(true)
  
  const logoutHandle = async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
    closeHandle()
    navigate('/login')
  }
  
  return (
    <>
      <Button variant="danger" size="sm" onClick={showHandle}>
        <span className="fas fa-sign-out-alt"></span> Keluar
      </Button>

      <Modal show={show} onHide={closeHandle} centered>
        <Modal.Header closeButton>
          <Modal.Title>Keluar dari sistem</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah kamu yakin ingin keluar dari sistem?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeHandle}>Batal</Button>
          <Button variant="primary" onClick={logoutHandle} disabled={loading}>
            {loading ? (
              <div>
                <span className="spinner-border text-light spinner-border-sm"></span> Loading...
              </div>
            ) : "Keluar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
