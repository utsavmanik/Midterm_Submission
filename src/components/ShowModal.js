import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
const ShowModal = (props) => {
    const open=props.open
    const onClose=props.onClose

    const [openSignup, setOpenSignUp] = useState(false)
    const onOpenSignUp = () => setOpenSignUp(true)
    const onCloseSignUp = () => setOpenSignUp(false)

    const [openLogin, setOpenLogin] = useState(false)
    const onOpenLogin = () => setOpenLogin(true)
    const onCloseLogin = () => setOpenLogin(false)
    return (
        <div>
            <Modal open={open} onClose={onClose} center
                classNames={{
                    overlayAnimationIn: 'customEnterOverlayAnimation',
                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                    modalAnimationIn: 'customEnterModalAnimation',
                    modalAnimationOut: 'customLeaveModalAnimation',
                }}
                animationDuration={800}
            ></Modal>
        </div>
    )
}

export default ShowModal
