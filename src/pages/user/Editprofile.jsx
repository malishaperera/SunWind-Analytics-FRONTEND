import { useState } from "react";
import { X, Camera, Save, User, Mail, MapPin, Briefcase } from "lucide-react";
import { modalStyles } from "./userStyles.js";

export default function EditProfileModal({ user, onClose, onSave }) {
    const [form, setForm] = useState({
        name:     user.name,
        role:     user.role,
        email:    user.email,
        location: user.location,
    });

    const handleChange = (field, value) =>
        setForm(prev => ({ ...prev, [field]: value }));

    const fields = [
        { key: "name",     label: "Full Name",    icon: User,      type: "text",  placeholder: "Your full name"  },
        { key: "role",     label: "Role",          icon: Briefcase, type: "text",  placeholder: "Your role"       },
        { key: "email",    label: "Email Address", icon: Mail,      type: "email", placeholder: "your@email.com"  },
        { key: "location", label: "Location",      icon: MapPin,    type: "text",  placeholder: "City, Country"   },
    ];

    return (
        <>
            {/* Inject modal styles */}
            <style>{modalStyles}</style>

            {/* Backdrop */}
            <div className="modal-backdrop" onClick={onClose}>

                {/* Panel — stop click bubbling */}
                <div className="modal-panel" onClick={e => e.stopPropagation()}>

                    {/* Header */}
                    <div className="modal-header">
                        <div>
                            <h2 className="modal-title">Edit Profile</h2>
                            <p className="modal-subtitle">Update your personal information</p>
                        </div>
                        <button className="modal-close-btn" onClick={onClose}>
                            <X size={18} />
                        </button>
                    </div>

                    {/* Avatar preview */}
                    <div className="modal-avatar-section">
                        <div className="modal-avatar-wrap">
                            <div className="modal-avatar">{user.avatar}</div>
                            <button className="modal-avatar-camera">
                                <Camera size={13} />
                            </button>
                        </div>
                        <div>
                            <p className="modal-avatar-name">{form.name}</p>
                            <p className="modal-avatar-role">{form.role}</p>
                        </div>
                    </div>

                    <div className="modal-divider" />

                    {/* Input fields */}
                    <div className="modal-fields">
                        {fields.map(({ key, label, icon: Icon, type, placeholder }) => (
                            <div key={key} className="modal-field-group">
                                <label className="modal-label">{label}</label>
                                <div className="modal-input-wrap">
                                    <Icon size={15} className="modal-input-icon" />
                                    <input
                                        type={type}
                                        value={form[key]}
                                        onChange={e => handleChange(key, e.target.value)}
                                        placeholder={placeholder}
                                        className="modal-input"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="modal-footer">
                        <button className="modal-cancel-btn" onClick={onClose}>
                            Cancel
                        </button>
                        <button
                            className="modal-save-btn"
                            onClick={() => { onSave(form); onClose(); }}
                        >
                            <Save size={15} />
                            Save Changes
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}
