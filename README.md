FIX Decoder
===========

Visit the live site at [http://drewnoakes.com/fix-decoder/](http://drewnoakes.com/fix-decoder/)

![Screenshot of FIX Decoder](https://raw.github.com/drewnoakes/fix-decoder/master/src/img/fix-decoder-screen-shot.png "A screen shot showing FIX Decoder in action")

A convenient and powerful decoder for FIX messages.

All processing is done locally in your browser, so no one can snoop on your messages.

Unlike the most prominent online FIX message decoder, this version is open source so
you can prove that your messages are safe.  This version supports a wider range of message
representations too, including multiple messages.

For example, you can paste directly from a QuickFIX log:

> &lt;20121206-12:04:56, FIX.4.2:MyComp-&gt;YourComp, outgoing&gt; (8=FIX.4.2 9=189 35=AE 34=510 49=MyComp 52=20121206-12:04:56.898 56=YourComp 22=4 31=157.8 32=10 43=N 48=GB00B16GWD56 60=20121206-12:04:56.891 64=20121206 150=0 570=N 571=TRADE_ID_88871 828=0 918=GBX 10=028 )
>
> &lt;20121206-12:05:06, FIX.4.2:MyComp-&gt;YourComp, incoming&gt; (8=FIX.4.2 9=119 35=AR 49=YourComp 56=MyComp 34=753 52=20121206-12:05:08 370=20121206-12:04:58.744 571=TRADE_ID_88871 150=0 939=0 10=106 )

Note the leading text is ignored, and that there are multiple messages.
Also the non-printable `SOH` character (`\001`) is handled correctly.

Using pipe characters (`|`) as separators is also supported.

License
=======

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
