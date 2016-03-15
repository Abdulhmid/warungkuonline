
<?
include "config/koneksi.php";
$table = $_REQUEST['table'];
$keyword = $_REQUEST['keyword'];

echo '</pre>
<h1>RESULT</h1>
<pre>
';

if( empty( $table ) || empty( $keyword ) || $table == '-' )
{
die('Tidak boleh ada kolom yang kosong
 <a href="searching.php">Kembali</a>');

}

$fields = mysql_list_fields( $nama_db, $table, $link );
$columns = mysql_num_fields( $fields );

echo '<a href="searching.php">Kembali</a>';
echo '</pre>
<div style="width: 100%; background-color: #cccccc;"> Searching <strong>';
echo $keyword . '</strong> from table <em>' . $table . '</em></div>
<pre>
';

for ( $i = 0; $i < $columns; $i++ ) {
$sql = 'select * from produk where nama_produk like "%' . $keyword . '%"';
$query = mysql_query( $sql );
$row = mysql_fetch_row( $query );

if( !empty( $row ) ) {
echo '

';
echo '</pre>
<table>';for( $a = 0; $a < $columns; $a++ ) {echo '
<tbody>
<tr>';echo '
<td>' . mysql_field_name( $fields, $a ) . '</td>
';echo '
<td>' . preg_replace( "/$keyword/i", '<span style="background-color: yellow;">' . $keyword . '</span>', $row[$a] ) . '</td>
';echo '</tr>
';}echo '</tbody>
</table>
<pre>
';
echo '

';
}
}
?>