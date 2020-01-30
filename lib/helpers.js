module.exports = {

    listArray: async function (group, page, selector, selgroup) 
    {
        let lista
        let item =[]

        try
        {        
         if(selgroup == 1) 
        {
            lista = await page.$$eval(selector, as => as.map(a => a.src));        
        }
        else 
        {
            lista = await page.$$eval(selector, as => as.map(a => a.href));        
        }

        return lista
    }

    catch(e)
        {
            console.log(e) ;
        }
    
    },
    

    printArray: async function (page, lista, group,  xUrl1 = '', xUrl2 = '') 
        {
             let item =[]

             try
             {        
            
             console.log(`\nListando ${group}...\n`);

             for(i=0;i < lista.length; i++)
                 {
                    if (lista[i] != null) 
                     {
                        item = lista[i];
                     }

                     if(group != 'Style Sheets')
                     {
                        console.log(item);
                     }
                     else 
                        if(item.includes('css'))
                        { 
                        console.log(item);
                        }
                     if(group == 'Links')
                     {
                        
                     //Navegando nos links (exceto twitter e language forum)
                     if(!(item.includes(xUrl1)) && !(item.includes(xUrl2)))
                     {
                     try
                     {
                        await page.goto(item)
                     }    
                     catch (e)
                     {
                        console.log(e) 
                     }
                     }
                     }
                    
                }
                
        }

        catch(e)
                    {
                        console.log(e) 
                    }
        
        }




}
