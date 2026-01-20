
import styles from "./modal.module.css";

const Modal = ({ open, type, message, onClose }) => {

    if (!open) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={`${styles.modal} ${type === "success"
                    ? styles.success
                    : type === "error"
                        ? styles.error
                        : styles.loading
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.icon}>
                    <div className={styles.iconWrapper}>
                        {type === "loading" && <div className={styles.spinner}></div>}
                        {type === "success" && (
                            <div className={styles.successCircle}>
                                <svg viewBox="0 0 52 52" className={styles.checkmark}>
                                    <path
                                        fill="none"
                                        d="M14 27 L22 35 L38 19"
                                    />
                                </svg>
                            </div>
                        )}

                        {type === "error" && (
                            <div className={styles.errorCircle}>
                                <svg viewBox="0 0 24 24" className={styles.errorIcon}>
                                    <path d="M6 6l12 12M18 6l-12 12" />
                                </svg>
                            </div>
                        )}

                    </div>

                    {/* Close Button */}
                    <button className={styles.close} onClick={onClose}>
                        ×
                    </button>

                </div>

                {/* Title */}
                <h3 className={styles.title}>
                    {type === "loading" && "Processing"}
                    {type === "success" && "Success"}
                    {type === "error" && "Error"}
                </h3>

                {/* Message */}
                <p className={styles.message}>{message}</p>

                {/* Action Button */}
                <button className={styles.actionBtn} onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
