interface CardProps{
    city: string;
    temperature: number;
    max_temperature: number;
    min_temperature: number;
    description: string;
    humidity: number;
    windSpeed: number,
    icon: string,
    date: string,
    visibility: number
    main: string;
}

export default function Card(data: CardProps){
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-semibold mb-2 md:text-4xl">{data.city}</h1>
            <h4 className="text-sm text-gray-500">{data.date}</h4>
            <div className="flex flex-row items-center justify-center mt-6">
                <h4 className="font-medium text-6xl">{Math.round(data.temperature)}°</h4>
                <div className="flex flex-col items-center ml-6">
                    <p>{data.main}</p>
                    <div className="mt-1">
                        <span className="text-sm font-light text-gray-500">{data.max_temperature}°C</span>
                    </div>
                    <div>
                        <span className="text-sm font-light text-gray-500">{Math.round(data.min_temperature)}°C</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <img 
                        src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
                        alt={data.description}
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-col items-center">
                    <h4 className="font-medium text-sm">Wind</h4>
                    <p className="text-sm text-gray-500">{data.windSpeed} m/s</p>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="font-medium text-sm">Humidity</h4>
                    <p className="text-sm text-gray-500">{data.humidity}%</p>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="font-medium text-sm">Visibility</h4>
                    <p className="text-sm text-gray-500">{(data.visibility)}km</p>
                </div>
            </div>
        </div>
    )
}