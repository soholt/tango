<?php defined('SYSPATH') or die('No direct script access.'); ?>

2013-01-18 11:26:32 --- ERROR: ErrorException [ 8 ]: Use of undefined constant TANGO - assumed 'TANGO' ~ APPPATH/config/os/debian.php [ 41 ]
2013-01-18 11:26:32 --- STRACE: ErrorException [ 8 ]: Use of undefined constant TANGO - assumed 'TANGO' ~ APPPATH/config/os/debian.php [ 41 ]
--
#0 /home/gin/workspace/php/tango/application/config/os/debian.php(41): Kohana_Core::error_handler(8, 'Use of undefine...', '/home/gin/works...', 41, Array)
#1 /home/gin/workspace/php/tango/system/classes/kohana/core.php(792): include('/home/gin/works...')
#2 /home/gin/workspace/php/tango/system/classes/kohana/config/file/reader.php(49): Kohana_Core::load('/home/gin/works...')
#3 /home/gin/workspace/php/tango/system/classes/kohana/config.php(124): Kohana_Config_File_Reader->load('os/debian')
#4 /home/gin/workspace/php/tango/application/classes/base.php(116): Kohana_Config->load('os/debian')
#5 [internal function]: Base->before()
#6 /home/gin/workspace/php/tango/system/classes/kohana/request/client/internal.php(103): ReflectionMethod->invoke(Object(Controller_System_Index))
#7 /home/gin/workspace/php/tango/system/classes/kohana/request/client.php(64): Kohana_Request_Client_Internal->execute_request(Object(Request))
#8 /home/gin/workspace/php/tango/system/classes/kohana/request.php(1138): Kohana_Request_Client->execute(Object(Request))
#9 /home/gin/workspace/php/tango/www/index.php(128): Kohana_Request->execute()
#10 {main}
2013-01-18 19:20:27 --- ERROR: ErrorException [ 8 ]: Use of undefined constant TANGO - assumed 'TANGO' ~ APPPATH/config/os/debian.php [ 41 ]
2013-01-18 19:20:27 --- STRACE: ErrorException [ 8 ]: Use of undefined constant TANGO - assumed 'TANGO' ~ APPPATH/config/os/debian.php [ 41 ]
--
#0 /home/gin/workspace/php/tango/application/config/os/debian.php(41): Kohana_Core::error_handler(8, 'Use of undefine...', '/home/gin/works...', 41, Array)
#1 /home/gin/workspace/php/tango/system/classes/kohana/core.php(792): include('/home/gin/works...')
#2 /home/gin/workspace/php/tango/system/classes/kohana/config/file/reader.php(49): Kohana_Core::load('/home/gin/works...')
#3 /home/gin/workspace/php/tango/system/classes/kohana/config.php(124): Kohana_Config_File_Reader->load('os/debian')
#4 /home/gin/workspace/php/tango/application/classes/base.php(116): Kohana_Config->load('os/debian')
#5 [internal function]: Base->before()
#6 /home/gin/workspace/php/tango/system/classes/kohana/request/client/internal.php(103): ReflectionMethod->invoke(Object(Controller_System_Index))
#7 /home/gin/workspace/php/tango/system/classes/kohana/request/client.php(64): Kohana_Request_Client_Internal->execute_request(Object(Request))
#8 /home/gin/workspace/php/tango/system/classes/kohana/request.php(1138): Kohana_Request_Client->execute(Object(Request))
#9 /home/gin/workspace/php/tango/www/index.php(128): Kohana_Request->execute()
#10 {main}