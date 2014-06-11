<?php

class DemoTest extends PHPUnit_Framework_TestCase
{
    public function testSomething()
    {
        $this->assertSame(2, 1 + 1);
        $this->assertSame(3, 1 + 2);
        $this->assertSame('12', 1 . 2);
    }
}