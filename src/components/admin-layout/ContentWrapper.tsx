import React from "react";

interface ContentWrapperProps {
  title?: string
  children: React.ReactNode
}

export default function ContentWrapper({ title = 'Judul', children }: ContentWrapperProps) {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="col-12">
            <h1 className="m-0">{title}</h1>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="col-12">
            {children}
          </div>
        </div>
        {/*/. container-fluid */}
      </section>
      {/* /.content */}
    </div>
  )
}
