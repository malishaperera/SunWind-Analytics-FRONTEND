export const userPageStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

    .user-page * { box-sizing: border-box; }

    .card {
        background: #ffffff;
        border-radius: 16px;
        border: 1px solid rgba(64,182,240,0.15);
        box-shadow: 0 2px 16px rgba(37,40,40,0.06);
    }

    .tab-btn {
        position: relative;
        padding: 10px 20px;
        font-size: 14px;
        font-weight: 600;
        border: none;
        background: transparent;
        cursor: pointer;
        transition: color 0.2s;
        font-family: 'Plus Jakarta Sans', sans-serif;
        color: #94a3b8;
    }
    .tab-btn:hover { color: #40b6f0; }
    .tab-btn.active { color: #40b6f0; }
    .tab-btn.active::after {
        content: '';
        position: absolute;
        bottom: -1px; left: 0; right: 0;
        height: 2px;
        background: #40b6f0;
        border-radius: 2px 2px 0 0;
    }

    .unit-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 14px;
        border-radius: 10px;
        background: #f8fbfe;
        border: 1px solid rgba(64,182,240,0.1);
        transition: background 0.15s;
    }
    .unit-row:hover { background: rgba(64,182,240,0.06); }

    .anomaly-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 14px;
        border-radius: 10px;
        background: #f8fbfe;
        border: 1px solid rgba(64,182,240,0.1);
        cursor: pointer;
        transition: background 0.15s;
    }
    .anomaly-row:hover { background: rgba(64,182,240,0.06); }

    .edit-btn {
        padding: 9px 20px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        font-family: 'Plus Jakarta Sans', sans-serif;
        background: rgba(64,182,240,0.1);
        color: #40b6f0;
        border: 1px solid rgba(64,182,240,0.3);
        cursor: pointer;
        transition: all 0.2s;
    }
    .edit-btn:hover {
        background: rgba(64,182,240,0.18);
        border-color: #40b6f0;
    }

    .pill {
        padding: 2px 9px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 700;
        font-family: 'JetBrains Mono', monospace;
        white-space: nowrap;
    }

    .mono { font-family: 'JetBrains Mono', monospace !important; }

    table { border-collapse: collapse; width: 100%; }
    thead tr { border-bottom: 1.5px solid rgba(64,182,240,0.15); }
    tbody tr { border-bottom: 1px solid rgba(64,182,240,0.08); }
    tbody tr:last-child { border-bottom: none; }

    @keyframes fadeUp {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.5s ease both; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-thumb { background: rgba(64,182,240,0.3); border-radius: 2px; }
`;

export const modalStyles = `
    .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(37,40,40,0.45);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        animation: fadeIn 0.2s ease;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    .modal-panel {
        background: #ffffff;
        border-radius: 24px;
        border: 1px solid rgba(64,182,240,0.2);
        box-shadow: 0 24px 60px rgba(37,40,40,0.18), 0 0 0 1px rgba(64,182,240,0.08);
        width: 100%;
        max-width: 480px;
        animation: slideUp 0.25s ease;
   
    }
    @keyframes slideUp {
        from { opacity: 0; transform: translateY(24px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .modal-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 28px 28px 20px;
        border-bottom: 1px solid rgba(64,182,240,0.1);
        background: linear-gradient(135deg, #f2fafe, #ffffff);
    }
    .modal-title {
        margin: 0 0 4px;
        font-size: 20px;
        font-weight: 800;
        color: #252828;
        letter-spacing: -0.3px;
    }
    .modal-subtitle {
        margin: 0;
        font-size: 13px;
        color: #94a3b8;
    }
    .modal-close-btn {
        width: 34px;
        height: 34px;
        border-radius: 10px;
        border: 1px solid rgba(64,182,240,0.2);
        background: rgba(64,182,240,0.06);
        color: #94a3b8;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.15s;
        flex-shrink: 0;
    }
    .modal-close-btn:hover {
        background: rgba(64,182,240,0.15);
        color: #40b6f0;
        border-color: #40b6f0;
    }

    .modal-avatar-section {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 20px 28px;
    }
    .modal-avatar-wrap { position: relative; flex-shrink: 0; }
    .modal-avatar {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: linear-gradient(135deg, #40b6f0, #1a9fd4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 800;
        color: #fff;
        letter-spacing: 2px;
        box-shadow: 0 4px 16px rgba(64,182,240,0.35);
    }
    .modal-avatar-camera {
        position: absolute;
        bottom: 0; right: 0;
        width: 22px; height: 22px;
        border-radius: 50%;
        background: #40b6f0;
        border: 2px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
        transition: background 0.15s;
    }
    .modal-avatar-camera:hover { background: #1a9fd4; }
    .modal-avatar-name {
        margin: 0 0 3px;
        font-size: 15px;
        font-weight: 700;
        color: #252828;
    }
    .modal-avatar-role {
        margin: 0;
        font-size: 12px;
        color: #94a3b8;
    }

    .modal-divider {
        height: 1px;
        background: rgba(64,182,240,0.1);
        margin: 0 28px;
    }

    .modal-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        padding: 20px 28px;
    }
    .modal-field-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .modal-label {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #94a3b8;
    }
    .modal-input-wrap {
        position: relative;
        display: flex;
        align-items: center;
    }
    .modal-input-icon {
        position: absolute;
        left: 12px;
        color: #40b6f0;
        pointer-events: none;
    }
    .modal-input {
        width: 100%;
        padding: 10px 12px 10px 34px;
        border-radius: 10px;
        border: 1.5px solid rgba(64,182,240,0.2);
        background: #f2fafe;
        font-size: 13px;
        font-weight: 500;
        color: #252828;
        font-family: 'Plus Jakarta Sans', sans-serif;
        outline: none;
        transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;
    }
    .modal-input:focus {
        border-color: #40b6f0;
        background: #ffffff;
        box-shadow: 0 0 0 3px rgba(64,182,240,0.12);
    }
    .modal-input::placeholder { color: #cbd5e1; }

    .modal-footer {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        padding: 16px 28px 24px;
        border-top: 1px solid rgba(64,182,240,0.1);
    }
    .modal-cancel-btn {
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        font-family: 'Plus Jakarta Sans', sans-serif;
        background: transparent;
        color: #94a3b8;
        border: 1.5px solid rgba(64,182,240,0.15);
        cursor: pointer;
        transition: all 0.15s;
    }
    .modal-cancel-btn:hover {
        background: #f2fafe;
        color: #252828;
    }
    .modal-save-btn {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 10px 22px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        font-family: 'Plus Jakarta Sans', sans-serif;
        background: #40b6f0;
        color: #ffffff;
        border: none;
        cursor: pointer;
        transition: all 0.15s;
        box-shadow: 0 4px 12px rgba(64,182,240,0.35);
    }
    .modal-save-btn:hover {
        background: #1a9fd4;
        box-shadow: 0 6px 18px rgba(64,182,240,0.45);
        transform: translateY(-1px);
    }
`;
