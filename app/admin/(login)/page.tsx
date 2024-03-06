/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from "react";
import { poppins } from "@/utils/fonts";
import { RiEyeLine, RiEyeOffLine, RiLoader2Line, RiLock2Line, RiUser3Line } from "@remixicon/react";
import s from "./login.module.scss";
import { useRouter } from "next/navigation";
const AdminLoginPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    // Gọi api login
    const handleLogin = async (event: any) => {
        event.preventDefault();
        setIsLoading(true); // Bắt đầu hiển thị trạng thái loading

        // Chờ 3 giây trước khi chuyển trang
        setTimeout(() => {
            setIsLoading(false); // Kết thúc hiển thị trạng thái loading
            router.push('/admin/dashboard'); // Chuyển đến trang dashboard
        }, 2000);
    }
    return (
        <>
            <div className={s["login"] + ' ' + poppins.className} >
                <img src="admin/login-bg.png" alt="login image" className={s["login__img"]} />
                <form action="" className={s["login__form"]}>
                    <h1 className={s["login__title"]}>Login</h1>
                    <div className={s["login__content"]}>
                        <div className={s["login__box"]}>
                            <RiUser3Line
                                className={s["ri-user-3-line"] + ' ' + s["login__icon"]}
                            />
                            <div className={s["login__box-input"]}>
                                <input
                                    type="text"
                                    className={s["login__input"]}
                                    id="login-email"
                                    placeholder=" "
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label htmlFor="login-email" className={s["login__label"]}>
                                    Username
                                </label>
                            </div>
                        </div>
                        <div className={s["login__box"]}>
                            <RiLock2Line
                                className={s["ri-lock-2-line"] + ' ' + s["login__icon"]}
                            />
                            <div className={s["login__box-input"]}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className={s["login__input"]}
                                    id="login-pass"
                                    placeholder=" "
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="login-pass" className={s["login__label"]}>
                                    Password
                                </label>
                                {showPassword ? (
                                    <RiEyeLine
                                        onClick={togglePasswordVisibility}
                                        className={s["ri-eye-line"] + ' ' + s["login__eye"]}
                                        id={s["login-eye"]}
                                    />
                                ) : (
                                    <RiEyeOffLine
                                        onClick={togglePasswordVisibility}
                                        className={s["ri-eye-off-line"] + ' ' + s["login__eye"]}
                                        id={s["login-eye"]}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    {/* <div className={s["login__check"]}>
                        <div className={s["login__check-group"]}>
                            <input
                                type="checkbox"
                                className={s["login__check-input"]}
                                id="login-check"
                            />
                            <label htmlFor="login-check" className={s["login__check-label"]}>
                                Remember me
                            </label>
                        </div>
                        <a href="#" className={s["login__forgot"]}>
                            Forgot Password?
                        </a>
                    </div> */}
                    {errorMessage && <p className={s["error-message"] + ' ' + s['err_notif']}>{errorMessage}</p>}
                    <button type="submit" className={s["login__button"]} onClick={handleLogin}>
                        {isLoading ? <>
                            <div
                                className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span
                                >
                            </div>
                        </> : "Login"}
                    </button>
                    <p className={s["login__register"]}>
                        {/* Welcome to the admin dashboard */}
                        {/* Don't have an account? <a href="#">Register</a> */}
                    </p>
                </form>
            </div>
        </>
    );
};

export default AdminLoginPage;
