import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [showYes, setShowYes] = useState(true);
  const [showNo, setShowNo] = useState(true);
  const [nameError, setNameError] = useState('');
  const [regError, setRegError] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    if (value && !/^[a-zA-Z\s]*$/.test(value)) {
      setNameError('Should be letters only');
    } else {
      setNameError('');
    }
  };

  const handleRegNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRegNumber(value);

    if (value && !/^\d{0,9}$/.test(value)) {
      setRegError('Should be 9 numbers only');
    } else {
      setRegError('');
    }
  };

  const handleYesClick = () => {
    setShowNo(false);
    setShowYes(true);
  };

  const handleNoClick = () => {
    setShowYes(false);
    setShowNo(true);
  };

  const formatBirthday = (date: string) => {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-500 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/mist.jpg" alt="MIST" className="h-12 w-auto" />
        </div>
        <div className="text-sm">
          Ritvik, 240968198, 7987260179
        </div>
      </header>

      <div className="flex p-8 gap-8">
        {/* Left Form Section */}
        <div className="flex-1 space-y-8">
          {/* Name Input */}
          <div>
            <label className="block mb-2">
              <div>Enter Name</div>
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full max-w-md bg-gray-500 border-none px-4 py-3 text-white placeholder-gray-300"
            />
            {nameError && <div className="text-red-500 text-sm mt-1">{nameError}</div>}
          </div>

          {/* Registration Number Input */}
          <div>
            <label className="block mb-2">
              <div>Enter Reg Number</div>
            </label>
            <input
              type="text"
              value={regNumber}
              onChange={handleRegNumberChange}
              maxLength={9}
              className="w-full max-w-md bg-gray-500 border-none px-4 py-3 text-white placeholder-gray-300"
            />
            {regError && <div className="text-red-500 text-sm mt-1">{regError}</div>}
          </div>

          {/* Birthday Input */}
          <div>
            <label className="block mb-2">
              <div>Enter birthday</div>
            </label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full max-w-md bg-gray-500 border-none px-4 py-3 text-white"
            />
          </div>

          {/* Question Buttons */}
          <div>
            <div className="mb-4">
              <div>Is webdev the best domain? :)</div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleYesClick}
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-12 py-6 text-lg"
              >
              </button>
              <button
                onClick={handleNoClick}
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-6 text-lg"
              >
              </button>
            </div>
          </div>
        </div>

        {/* Right Sheet Section */}
        <div className="w-[480px]">
          <div className="bg-white text-black p-8 shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-8">
              MIST Mancomm Member 69
            </h1>

            <div className="space-y-6">
              <div>
                <p className="mb-1">My name is {name || ''}</p>
              </div>

              <div>
                <p className="mb-1">My registration number is {regNumber || ''}</p>
              </div>

              <div>
                <p className="mb-1">My birthday is on {formatBirthday(birthday) || 'DD/MM/YYYY'}</p>
              </div>

              <div className="pt-4">
                <p className="text-center mb-4">Is webdev the best domain? :)</p>
                <div className="flex flex-col items-center gap-4">
                  {showYes && (
                    <button
                      className="bg-green-500 text-white font-bold px-24 py-4 rounded-full text-lg"
                    >
                      YES
                    </button>
                  )}
                  {showNo && (
                    <button
                      className="bg-red-500 text-white font-bold px-24 py-4 rounded-full text-lg"
                    >
                      NO
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
