

export const YaMap: React.FC = () => {


    /*const MapWrapper = React.memo(
        () => {
            return <div id="map-container" style={{ width: '500px', height: '500px' }}></div>;
        },
        () => true,
    );
    
    useEffect(() => {
        let map: any;
        load().then((mapglAPI) => {
            const map = new mapglAPI.Map('map-container', {
                
                center: [54.94142974595205, 82.89019346237184],
                zoom: 16,
            });
        });

        // Destroy the map, if Map component is going to be unmounted
        return () => map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );

    <script type='text/javascript' src="https://widgets.2gis.com/js/DGWidgetLoader.js"/>
      <script type='text/javascript' dangerouslySetInnerHTML={{
          
          __html: `
              new DGWidgetLoader({"width":640,"height":600,"borderColor":"#a3a3a3","pos":{"lat":54.95958122164661,"lon":82.90094375610353,"zoom":13},"opt":{"city":"novosibirsk"},"org":[{"id":"70000001038825055"}]});
          `
      }}></script>
    

      <a className="dg-widget-link" href="http://2gis.ru/novosibirsk/firm/70000001038825055/center/82.89019346237184,54.94142974595205/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть на карте Новосибирска</a><div className="dg-widget-link"><a href="http://2gis.ru/novosibirsk/firm/70000001038825055/photos/70000001038825055/center/82.89019346237184,54.94142974595205/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">Фотографии компании</a></div><div className="dg-widget-link"><a href="http://2gis.ru/novosibirsk/center/82.8902,54.940782/zoom/16/routeTab/rsType/bus/to/82.8902,54.940782╎Lemon Fit, тренажёрный зал?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до Lemon Fit, тренажёрный зал</a></div>
            <Script 
                src="https://widgets.2gis.com/js/DGWidgetLoader.js"
                strategy="lazyOnload"
                onLoad={() => setWidgetIsLoad(true)}
            >
            </Script>
    */
    return (
        <>
            <div className="h-full w-full" style={{position: 'relative', overflow: 'hidden'}}><a href="https://yandex.ru/maps/org/lemonfit/129994345380/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>LemonFit</a><a href="https://yandex.ru/maps/65/novosibirsk/category/sports_hall_gym/41430094175/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Спортивный, тренажёрный зал в Новосибирске</a><a href="https://yandex.ru/maps/65/novosibirsk/category/fitness_club/184107363/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '28px'}}>Фитнес-клуб в Новосибирске</a><iframe src="https://yandex.ru/map-widget/v1/?ll=82.929479%2C54.964201&mode=search&oid=129994345380&ol=biz&z=13.68" width="100%" height="100%" frameBorder="1" allowFullScreen={true} style={{position: 'relative'}} className="rounded-2xl"></iframe></div>
        </>
    );
};