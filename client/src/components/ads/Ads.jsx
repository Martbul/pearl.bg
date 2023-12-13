import Search from "./Search";
import AdsGrid from "./AdsGrid";

import { DisplayAdsProvider } from '../../contexts/displayAdsContext';

export default function Binds() {
   return (
     <>
       <DisplayAdsProvider  >
       <Search />
            <AdsGrid/>
         </DisplayAdsProvider>
     </>
   );
}