import { useState } from 'react'; import { useNavigate } from 'react-router-dom'; import api from '../api/api';
export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' }); const [msg, setMsg] = useState(''); const nav = useNavigate();
    const submit = async (e) => { e.preventDefault(); try { const res = await api.post('/auth/login', form); localStorage.setItem('token', res.data.token); localStorage.setItem('user', JSON.stringify(res.data.user)); nav('/dashboard') } catch (err) { setMsg(err.response?.data?.message || 'Login failed') } };
    return <div className="formBox"><h2>Login</h2><form onSubmit={submit}><input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} /><input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} /><button>Login</button></form><p>{msg}</p></div>
}
