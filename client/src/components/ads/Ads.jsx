import Search from "./Search";
import AdsGrid from "./AdsGrid";

import { BindsProvider } from '../../contexts/bindsContext';

export default function Binds() {
   return (
     <>
       <BindsProvider>
       <Search />
            <AdsGrid/>
         </BindsProvider>
     </>
   );
}