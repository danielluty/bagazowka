<?php
			$godziny = $_POST["godziny"];
			$pracownicy = $_POST["pracownicy"];
			if(!empty($godziny) && !empty($pracownicy))
				{
				for($i=1; $i<=10; $i++)
				{
					if(preg_match("/$i/", $godziny, $matchesh))
						$czas = $matchesh[0];
				}					
					if(preg_match("/1/", $pracownicy, $matchesp))
						$zaloga = 100;
						
					if(preg_match("/2/", $pracownicy, $matchesp))
						$zaloga = 130;
						
					if(preg_match("/3/", $pracownicy, $matchesp))
						$zaloga = 160;
					
					if(preg_match("/4/", $pracownicy, $matchesp))
						$zaloga = 190;
						
					if(preg_match("/[1234]{1}/", $pracownicy, $matchesp)) {}
					else
						$zaloga = 70;
				}	
			?>
<br/>
<form name="cennik" action="./index.php" method="post">
    <table>
        <tr>
            <td>Czas trwania przeprowadzki:
            </td>
            <td>
                <select name="godziny" size="1">
                <?php
					for($i=1; $i<10; $i++)
					{
						
						if($i==1)
							echo "<option>$i godzina</option>";
						else 
						{
							if($i>1 && $i<=4)
								echo "<option>$i godziny</option>";
							else
								echo "<option>$i godzin</option>";
						}
						
					}		
					?>
                </select>
            </td>
        </tr>
        <tr>
            <td>Ilość pracowników:</td>
            <td>
                <select name="pracownicy" size="1">
                    <option>Tylko kierowca</option>
                    <option>Kierowca + 1 osoba nosząca</option>
                    <option>Kierowca + 2 osoby noszące</option>
                    <option>Kierowca + 3 osoby noszące</option>
                    <option>Kierowca + 4 osoby noszące</option>
                </select>
            </td>
        </tr>
        <tr>
            <td><input type="submit" value="Wyślij"/></td>
        </tr>
    </table>
</form>
<br/><br/>
<div id="cena">
    Cena netto:

    <?php if(!empty($czas) && !empty($zaloga)) { $cena = $czas * $zaloga; echo
    "$cena zł</div>"; } ?>

    <!-- Koniec cennika -->

</div>