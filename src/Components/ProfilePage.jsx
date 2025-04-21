import React, { useEffect, useState } from 'react'
import FetchUserProfile from '../Utilites/FetchUserProfile'
import { useAuth } from '../../Redux/AuthContext'
import { Link } from 'react-router-dom';
import handleDeleteresume from '../Utilites/handleDeleteresume';
import Loading from './Loading';
import CustomToastContainer from './CustomToastContainer';
import { Download_resume } from '../Utilites/Download_resume';
import { useNavigate } from 'react-router-dom';
import GetAnalyzereumeinfo from '../Utilites/GetAnalyzeresumeinfo';

const ProfilePage = () => {
    const { UserCredentials } = useAuth();
    const [userData, setuserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [AnalyseData, setAnalyseData] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        FetchUserProfile(UserCredentials, setuserData);
    }, [loading])
    useEffect(() => {
        if (AnalyseData) {
            navigate('/ResumeAnalyzeDetails', { state: { AnalyseData } });
        }
    }, [AnalyseData]);
    return (<>
        <CustomToastContainer />
        {
            loading ? <Loading message='Loading...' />
                : <div className="min-h-screen bg-gray-100 p-6">
                    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <img
                                className="w-28 h-28 rounded-full border-4 border-blue-500"
                                src={`https://tse4.mm.bing.net/th?id=OIP.AlIScK6urTegkZ178dAAGgHaHa&pid=Api&P=0&h=220`}
                                alt="avatar"
                            />
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">{userData?.userdata?.name}</h2>
                                <p className="text-gray-500">{userData?.userdata?.email}</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Uploaded Resumes</h3>
                            {userData?.resumes?.length === 0 ? (
                                <p className="text-gray-500">No resumes uploaded yet.</p>
                            ) : (
                                <ul className="space-y-4">
                                    {userData?.resumes?.map((resume) => (
                                        <li key={resume._id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow">
                                            <div>
                                                <p className="font-semibold text-gray-800">{resume.filename}</p>
                                                <p className="text-sm text-gray-500">
                                                    Uploaded on: {new Date(resume.updatedAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <div className="flex gap-4">
                                                <button
                                                    onClick={() => GetAnalyzereumeinfo(resume._id, setLoading, setAnalyseData)}
                                                    className="text-green-600 hover:underline"
                                                >
                                                    Analyse
                                                </button>
                                                {console.log(resume)}
                                                <button
                                                    onClick={() => Download_resume(resume._id, resume.filename)}
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    Download
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteresume(resume._id, setLoading)}
                                                    className="text-red-500 hover:underline"
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="mt-10 flex items-center justify-between">
                            <Link to='/Analyze' className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
                                Upload New Resume
                            </Link>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
        }


    </>)
}

export default ProfilePage