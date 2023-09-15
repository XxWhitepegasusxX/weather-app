import CepInput from "@/components/CepInput";
import Header from "@/components/Header";
import { useState } from "react";
import { states } from "@/utils/states";

interface CepData {
    cep: string;
    logradouro: string;
    bairro: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  }

export default function Cep(){
    const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [results, setResults] = useState<CepData[]>([]);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleSearch = async () => {
    setError("");
    if (!state || !city) {
      setError("Select a state, city and street!");
      return;
    }

    if (!street) {
      setError("street needed.");
      return;
    }

    setSearching(true);

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${state}/${city}/${street}/json/`
      );
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        console.error("API request failed with status:", response.status);
        setResults([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]);
    } finally {
      setSearching(false);
      setSearched(true);
    }
  };
    return(
        <>
            <Header/>
            <div className="p-4 flex flex-col justify-center items-center h-screen">
            <div className="border-2 border-white-300 rounded-lg p-6 w-full sm:w-96">
                <h1 className="text-2xl font-semibold mb-4 leading-6 text-gray-900">
                    CEP
                </h1>
                <div className="flex flex-col space-y-4">
                <CepInput
                    label="State"
                    type="select"
                    value={state}
                    options={states}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Select a State"
                />
                <CepInput
                    label="City name"
                    type="text"
                    placeholder="Ex: São Paulo"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <CepInput
                    label="Street name"
                    type="text"
                    placeholder="Ex: Av. Paulista"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg"
                    onClick={() => {
                    handleSearch();
                    setSearched(true);
                    }}
                >
                    Search By CEP
                </button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
            </div>
            <div className="mt-4 text-center">
                {searching ? (
                <p>Searching...</p>
                ) : results.length > 0 ? (
                <div>
                    {results.map((result, index) => (
                    <div className="text-left" key={index}>
                        <strong>CEP:</strong> {result.cep}
                        <br />
                        {result.logradouro ? (
                            <>
                                <strong>Street:</strong> {result.logradouro}
                                <br />
                            </>
                        ) : null}
                        {result.bairro ? (
                            <>
                                <strong>Neighborhood:</strong> {result.bairro}
                                <hr />
                            </>
                        ): null}
                    </div>
                    ))}
                </div>
                ) : searched && !error ? (
                <p>No results...</p>
                ) : null}
            </div>
            </div>
        </>
    )
}